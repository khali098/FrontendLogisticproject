import React, { useEffect, useState } from 'react';
import { getSupplierByProductId } from '../../../Data/slices/Products';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Data/store';

interface SupplierProps {
    supplierName: string;
    contactNumber: string;
}

interface ProductProps {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    unit: string;
    expiryDate?: Date | null;
    thresholdValue: number;
    availability: string;
    image: File | null;
    supplierName: string;
    contactNumber: string;
    storeName: string;
    stockInHand: string;
}

const ProductInfo: React.FC<ProductProps & SupplierProps> = ({
    id,
    name,
    category,
    price,
    quantity,
    unit,
    expiryDate,
    thresholdValue,
    availability,
    image,
    supplierName,
    contactNumber,
    storeName,
    stockInHand,
}: ProductProps & SupplierProps) => {

    const dispatch = useDispatch();
    const supplierData = useSelector((state: RootState) => state.products.supplierData);
    const productStoreInfo = useSelector((state: RootState) => state.products.productStoreInfo);
    const formattedExpiryDate = expiryDate ? new Date(expiryDate).toLocaleDateString() : "N/A";
    const [activeTab, setActiveTab] = useState('overview');
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedId, setEditedId] = useState(id);
    const [editedCategory, setEditedCategory] = useState(category);
    const [editedThresholdValue, setEditedThresholdValue] = useState(thresholdValue);
 


    




    // Fonction pour gérer le clic sur le bouton "Edit"
    const handleEditClick = () => {
        setIsEditing(true); // Mettre à jour l'état pour indiquer que l'édition est activée
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedName(e.target.value); // Mettre à jour le nom édité avec la nouvelle valeur saisie par l'utilisateur
    };
    const handleIdChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedId(e.target.valueAsNumber); // Mettre à jour le nom édité avec la nouvelle valeur saisie par l'utilisateur
    };
    const handleCategoryChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedCategory(e.target.value); // Mettre à jour le nom édité avec la nouvelle valeur saisie par l'utilisateur
    };
    
    const handleThresoldvalueChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedThresholdValue(e.target.valueAsNumber); // Mettre à jour le nom édité avec la nouvelle valeur saisie par l'utilisateur
    };
   
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 lg:px-1">
                <div className="bg-white relative sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-2xl">{name}</p>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <div className="flex items-center space-x-3 w-full md:w-auto">
                                <button onClick={handleEditClick} className="inline-flex items-center h-10 px-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                    <span>Edit</span>
                                </button>
                                <button className="inline-flex items-center h-10 px-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg">
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-100 dark:border-gray-100">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-600 dark:text-gray-800">
                    {/* Onglets ici */}
                </ul>
            </div>
            {/* Contenu en fonction de l'onglet actif */}
            {activeTab === 'overview' && (
                <div className="overflow-x-auto">
                    <section className="overflow-hidden bg-white py-8 sm:py-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                {/* Partie gauche */}
                                <div className="lg:pr-60 lg:pt-4 ">
                                    <div className="lg:max-w-lg mb-10">
                                        <h2 className="flex justify-start text-lg font-semibold text-gray-900">Primary Details</h2>
                                        <div className="mt-4 space-y-4 ">
                                            <div className="flex items-center justify-between ">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">Product name</p>
                                                {isEditing ? (
                                                    <input type="text" value={editedName} onChange={handleNameChange} className="text-lg leading-8 text-gray-600" />
                                                ) : (
                                                    <p className="text-lg leading-8 text-gray-600">{name}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">Product ID</p>
                                                {isEditing ? (
                                                    <input type="number" value={editedId} onChange={handleIdChange} className="text-lg leading-8 text-gray-600" />
                                                ) : (
                                                    <p className="text-lg leading-8 text-gray-600">{id}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">Product category</p>
                                                {isEditing ? (
                                                    <input type="text" value={editedCategory} onChange={handleCategoryChange} className="text-lg leading-8 text-gray-600" />
                                                ) : (
                                                    <p className="text-lg leading-8 text-gray-600">{category}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">Expiry Date</p>
                                                {isEditing ? (
                                                    <input type="date" value={formattedExpiryDate} onChange={(e) => {}} className="text-lg leading-8 text-gray-600" />
                                                ) : (
                                                    <p className="text-lg leading-8 text-gray-600">{formattedExpiryDate}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">Threshold Value</p>
                                                {isEditing ? (
                                                    <input type="number" value={editedThresholdValue} onChange={handleThresoldvalueChange} className="text-lg leading-8 text-gray-600" />
                                                ) : (
                                                    <p className="text-lg leading-8 text-gray-600">{thresholdValue}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:max-w-lg mb-10">
                                        <h2 className="flex justify-start text-lg font-semibold text-gray-900">Supplier Details</h2>
                                        <div className="mt-4 space-y-4">
                                            {supplierData && supplierData.map((supplier: any, index: number) => (
                                                <div key={index}>
                                                    <div className="flex items-center justify-between ">
                                                        <p className="text font-semibold leading-8 text-gray-500 mr-2">Supplier name</p>
                                                        {isEditing ? (
                                                            <input type="text" value={supplier.name} onChange={(e) => {}} className="text-lg leading-8 text-gray-600" />
                                                        ) : (
                                                            <p className="text-lg leading-8 text-gray-600">{supplier.name}</p>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text font-semibold leading-8 text-gray-500 mr-2">Contact Number</p>
                                                        {isEditing ? (
                                                            <input type="text" value={supplier.contact_number} onChange={(e) => {}} className="text-lg leading-8 text-gray-600" />
                                                        ) : (
                                                            <p className="text-lg leading-8 text-gray-600">{supplier.contact_number}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Afficher les données du magasin */}
                                    {productStoreInfo && productStoreInfo.length > 0 && (
                                        <div className="lg:max-w-lg">
                                            <h2 className="flex justify-start text-lg font-semibold text-gray-900">Stock Locations</h2>
                                            <div className="relative overflow-x-auto mt-4 space-y-4">
                                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-200 dark:text-gray-900">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3">
                                                                Store name
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Stock in hand
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {productStoreInfo.map((store: any, index: number) => (
                                                            <tr key={index} className="bg-white border-b dark:bg-white-800 dark:border-white-700">
                                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                                                    {store.storeName}
                                                                </td>
                                                                <td className="px-6 py-4 font-medium text-blue-700">
                                                                    {store.stockInHand}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Partie droite */}
                                <div className="lg:pl-8">
                                    <div className="w-full lg:max-w-lg">
                                        {/* Cadre pour la photo */}
                                        <div className="flex items-center justify-center w-26 h-60  border-2 border-gray-300 border-dashed rounded-lg p-6" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                        <div className="lg:pr-40 lg:pt-4 flex flex-col justify-end  ">
                                            <div className="flex items-center justify-between">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">Remaining Stock</p>
                                              
                                                    <p className="text-lg leading-8 text-gray-600">{quantity}</p>
                                                
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">On the way</p>
                                                {isEditing ? (
                                                    <input type="number" value={id} onChange={(e) => {}} className="text-lg leading-8 text-gray-600" />
                                                ) : (
                                                    <p className="text-lg leading-8 text-gray-600">{id}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text font-semibold leading-8 text-gray-500 mr-2">Threshold value</p>
                                                {isEditing ? (
                                                    <input type="number" value={thresholdValue} onChange={(e) => {}} className="text-lg leading-8 text-gray-600" />
                                                ) : (
                                                    <p className="text-lg leading-8 text-gray-600">{thresholdValue}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

export default ProductInfo;
