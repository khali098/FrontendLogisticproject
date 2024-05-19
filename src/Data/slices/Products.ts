import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { supabase } from '../../Utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';




interface DataState{
    data:any[] ,
    loading:boolean,
    error:string | null,
    supplierData: any | null,
    productStoreInfo: any | null,
  }
  
  const initialState :DataState = {
      data:[],
      loading: false,
      error: null,
      supplierData: null,
      productStoreInfo: null,
  }



  export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (queries, thunkAPI) => {
    let data;
    try {
     
            const { data, error } = await supabase
            .from('products')
            .select('*')
            .range(0, 9)
            console.log(data, error)
        
      if (! error) {
        
         return data
         
      }
      throw new Error(error.message);
    } catch (err:any) {
      toast.error(`${err?.message ? err?.message : err}`)
      return Promise.reject(err.message ? err.message : err);
    }
  }
  ); 

  export const getSupplierByProductId = createAsyncThunk<any[], number>(
    "products/getSupplierByProductId",
    async (productId: number, thunkAPI) => {
      try {
        const { data, error } = await supabase
          .from('supplier')
          .select('*')
          .eq('product_id', productId);
        
        if (!error) {
          return data;
        }
        throw new Error(error.message);
      } catch (err:any) {
        toast.error(`${err?.message ? err?.message : err}`);
        return Promise.reject(err.message ? err.message : err);
      }
    }
  );
  

  export const InsertProduct:any = createAsyncThunk(
    "products/InsertProduct",
    async (productData: any, thunkAPI) => { // Prend maintenant productData comme paramètre
      try {
        const { data, error } = await supabase
          .from('products')
          .insert([productData]) // Utilisez les données passées plutôt que les valeurs statiques
          .select();
        
        if (!error) {
          return data;
        }
        throw new Error(error.message);
      } catch (err:any) {
        toast.error(`${err?.message ? err?.message : err}`);
        return thunkAPI.rejectWithValue(err.message ? err.message : err);
      }
    }
  );


  export const getProductStoreInfo = createAsyncThunk<any[], number>(
    "products/getProductStoreInfo",
    async (productId: number) => {
      try {
        // Récupérer les informations sur le magasin à partir de ProductStore
        const productStoreResponse = await supabase
          .from('productstore')
          .select('*, store(name, location)')
          .eq('product_id', productId)
          
  
        if (productStoreResponse.error) {
          throw new Error(productStoreResponse.error.message);
        }
  
        const productStoreData = productStoreResponse.data;
        const storeData = productStoreData.map((data: any) => ({
          storeName: data.store.name,
          storeLocation: data.store.location,
          stockInHand: data.stock_in_hand,
        }));
  
        // Retourner les données combinées
        return storeData;
      } catch (err: any) {
        toast.error(`${err?.message ? err?.message : err}`);
        return Promise.reject(err.message ? err.message : err);
      }
    }
  );
  

  
  

  
  
  const slice=createSlice({
      name:'products',
      initialState:initialState,
      reducers:{
      
      },
      extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action)
          
                
                    state.data = action.payload; 
                  
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.error.message as string) || 'Failed to fetch data';
            });
            builder
            .addCase(InsertProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(InsertProduct.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action)
          
                
                    state.data = action.payload; 
                  
            })
            .addCase(InsertProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.error.message as string) || 'Failed to fetch data';
            });
            builder
            .addCase(getSupplierByProductId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSupplierByProductId.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action)
          
                
                state.supplierData = action.payload;  
                  
            })
            .addCase(getSupplierByProductId.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.error.message as string) || 'Failed to fetch data';
            });
            builder
            .addCase(getProductStoreInfo.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(getProductStoreInfo.fulfilled, (state, action) => {
              state.loading = false;
              // Mettre à jour l'état avec les données du magasin et du stock en main associés au produit
              state.productStoreInfo = action.payload;
            })
            .addCase(getProductStoreInfo.rejected, (state, action) => {
              state.loading = false;
              state.error = (action.error.message as string) || 'Failed to fetch data';
            });
            
    },
  })
  
  export const {}= slice.actions
  export const reducer=slice.reducer
  export default slice