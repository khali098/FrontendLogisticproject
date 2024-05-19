import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InsertProduct } from '../../../../Data/slices/Products';
import { supabase } from '../../../../Utils/api';
import { error } from 'console';

interface FormData {
    name: string;
    id: string;
    category: string;
    price: string;
    quantity: string;
    unit: string;
    expiry_date: string;
    threshold_value: string;
    image_url: File | null; // Définissez le type de image_url comme File | null
}

export default function AddProduct() {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        id: '',
        category: '',
        price: '',
        quantity: '',
        unit: '',
        expiry_date: '',
        threshold_value: '',
        image_url: null,
    });
    const dispatch = useDispatch(); // Obtenez la fonction dispatch de Redux

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        console.log('Files:', files); // Vérifiez si les fichiers sont correctement extraits de l'événement
        if (files && files.length > 0) {
            const file = files[0];
            console.log('Selected image_url:', file); 
            setFormData({
                ...formData,
                image_url: file
            });
        }
    };
    
    
    const handleAddProduct = async () => {
        try {
            // Vérifiez si formData.image_url est null
            if (!formData.image_url) {
                throw new Error("No image_url selected.");
            }
            
            // Envoyer l'image_url à Supabase
            const { data, error } = await supabase.storage.from('ProductsBucket').upload(`images/${formData.image_url.name}`, formData.image_url);
            if (error) {
                throw new Error(`Error uploading image_url: ${error.message}`);
            }
    
            // Modifier formData pour contenir l'URL de l'image_url téléchargée
            const imageUrl = `https://jxwvdzxtiadkcqwzcjia.supabase.co/storage/v1/object/public/ProductsBucket/${data.path}`; // Utilisez la propriété path pour obtenir l'URL de l'image_url
    
            // Ajoutez l'URL de l'image_url aux données du formulaire
            const productData = { ...formData, image_url: imageUrl };
    
            // Dispatch l'action InsertProduct pour insérer un nouveau produit
            await dispatch(InsertProduct(productData));
    
            // Fermez la fenêtre modale après l'insertion réussie du produit
            closeModal();
        } catch (error) {
            console.error('Error inserting product:', error);
        }
        console.log(formData)
    };
    
    
    

    return (
        <>
            <button onClick={openModal} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button>
            
            {/* Main modal */}
            <div id="crud-modal" aria-hidden={!modalOpen} className={`fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${modalOpen ? '' : 'hidden'}`}>
                <div className="relative bg-white rounded-lg shadow-md w-full max-w-md p-6 flex flex-col items-center justify-center">
                    {/* Drag and drop image_url upload */}
                    <div className="flex items-center justify-center flex-row gap-4">
                        <div className="flex items-center justify-center w-24 h-24 relative border-2 border-gray-300 border-dashed rounded-lg p-6">
                            <input type="file"      className="absolute inset-0 w-full h-full opacity-0 z-50" />
                        </div>
                        <div className="text-center mt-4 ml-2">
                            <h3 className="text-sm font-medium text-gray-500">
                                <label htmlFor="file-upload" className="relative cursor-pointer">
                                    <span>Drag image_url here</span><br />
                                    <span >or</span><br />
                                    <span className="text-indigo-400  cursor-pointer">Browse image_url</span>
                                    <input id="file-upload" name="file-upload" type="file" onChange={handleImageChange} accept="image_url/*" className="sr-only" />
                                </label>
                            </h3>
                        </div>
                    </div>
                    {/* End Drag and drop image_url upload */}

                    {/* Other form fields */}
                    <div className="flex flex-col space-y-4 mt-6 w-full">
                        <div className="flex items-center ">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mr-4 w-24 flex items-center justify-start">Product Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" placeholder="Enter product name" required />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="id" className="block text-sm font-medium text-gray-700 mr-4 w-24 flex items-center justify-start">Product ID</label>
                            <input type="number" name="id" id="id" value={formData.id} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" placeholder="Enter product ID" required />
                        </div>
                        <div className="flex items-center ">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mr-4 w-24 flex items-center justify-start">Category</label>
                            <input type="text" name="category" id="category" value={formData.category} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" />
                               
                        </div>
                        <div className="flex items-center justify-start">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mr-4 w-24 flex items-center justify-start">Buying Price</label>
                            <input type="number" name="price" id="price" value={formData.price} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" placeholder="Enter buying price" required />
                        </div>
                        <div className="flex items-center justify-start">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-4 w-24 flex items-center justify-start">Quantity</label>
                            <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" placeholder="Enter product quantity" required />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mr-4 w-24 flex items-center justify-start">Unit</label>
                            <input type="text" name="unit" id="unit" value={formData.unit} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" placeholder="Enter product unit" required />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700 mr-4 w-24 flex items-center justify-start">Expiry Date</label>
                            <input type="date" name="expiry_date" id="expiry_date" value={formData.expiry_date} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" placeholder="Enter expiry date" required />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="threshold_value" className="block text-sm font-medium text-gray-700 mr-4 w-22 flex items-center justify-start">Threshold Value</label>
                            <input type="number" name="threshold_value" id="threshold_value" value={formData.threshold_value} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block flex-1 p-2.5 focus:outline-none" placeholder="Enter threshold value" required />
                        </div>
                        
                     
                    </div>
                    {/* End other form fields */}

                    {/* Buttons */}
                    <div className="flex justify-end mt-4 w-full">
                        <button type="button" onClick={closeModal} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            Discard
                        </button>
                        <button type="submit"  onClick={handleAddProduct} className="ml-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Add Product
                        </button>
                    </div>
                    {/* End Buttons */}
                </div>
            </div>
        </>
    );
}
