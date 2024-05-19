import { useEffect } from "react";
import SideBar from "../../../Components/SideNaveBar/sideBar";
import { useAppDispatch, useAppSelector, useAuthGuard } from "../../../Utils/hooks";
import { getAllProducts } from "../../../Data/slices/Products";
import { data } from "autoprefixer";

export default function InventoryPage(){
    useAuthGuard()

    const {loading,data}=useAppSelector(state=>state.products)
  
    const dispatch = useAppDispatch()

    useEffect(()=>{
dispatch(getAllProducts())
    },[dispatch])
    
    
    return(
        <>
        <SideBar/>
        </>
    )
}