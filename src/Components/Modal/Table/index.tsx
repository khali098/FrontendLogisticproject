import { useSelector, useDispatch } from "react-redux";
import AddProduct from "../Buttons/AddProduct";
import { RootState } from "../../../Data/store";
import { useState, useEffect } from "react";
import ProductInfo from "../ProductInfo";
import { getProductStoreInfo, getSupplierByProductId } from "../../../Data/slices/Products";
import {  AnyAction, ThunkDispatch  } from "@reduxjs/toolkit";


// Définir le type de l'action

// Définir le type de l'action
type ThunkType = ThunkDispatch<RootState, undefined, AnyAction>;

interface ProductProps {
    name: string;
    id?: number; // Rendu optionnel
    category?: string; // Rendu optionnel
    price: number;
    quantity: number;
    unit?: string; // Rendu optionnel
    expiry_date?: Date;
    threshold_value: number;
    availability: string;
    image_url: File | null; // Rendu optionnel
}

export default function Table({ name, price, quantity, threshold_value, expiry_date, availability }: ProductProps) {
    const products = useSelector((state: RootState) => state.products.data);
    const dispatch = useDispatch<ThunkType>(); // Utiliser le type ThunkType pour dispatch

    const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);
    const [supplierData, setSupplierData] = useState<{ name: string; contact_number: string; } | null>(null);
    const [productStoreInfo, setStoreData] = useState<{ name: string; stockInHand: string; } | null>(null);


    useEffect(() => {
        if (selectedProduct && selectedProduct.id) {
            dispatch(getSupplierByProductId(selectedProduct.id))
                .then((response) => {
                    const supplierPayload = response.payload as { name: string; contact_number: string; } | null;
                    setSupplierData(supplierPayload);
                })
                .catch((error) => {
                    console.error("Error fetching supplier data:", error);
                });

                dispatch(getProductStoreInfo(selectedProduct.id))
                .then((response) => {
                    const storePayload = response.payload as { name: string; stockInHand: string; } | null;
                    setStoreData(storePayload);
                })
                .catch((error) => {
                    console.error("Error fetching store data:", error);
                });
        }
    }, [dispatch, selectedProduct]);

    const openProductInfo = (product: ProductProps) => {
        setSelectedProduct(product);
    };

    const closeProductInfo = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            {selectedProduct ? (
                <ProductInfo
                    name={selectedProduct.name}
                    price={selectedProduct.price}
                    quantity={selectedProduct.quantity}
                    thresholdValue={selectedProduct.threshold_value}
                    expiryDate={selectedProduct.expiry_date ? new Date(selectedProduct.expiry_date) : undefined}
                    availability={selectedProduct.availability}
                    id={selectedProduct.id || 0}
                    category={selectedProduct.category || ''}
                    unit={selectedProduct.unit || ''}
                    image={selectedProduct.image_url}
                    supplierName={supplierData && supplierData.name ? supplierData.name : ''}
                    contactNumber={supplierData && supplierData.contact_number ? supplierData.contact_number : ''}
                    storeName={productStoreInfo && productStoreInfo.name ? productStoreInfo.name : ''} 
                    stockInHand={productStoreInfo && productStoreInfo.stockInHand ? productStoreInfo.stockInHand : ''}
                />
            ) : (
                <section >
                    <div className="mx-auto max-w-screen-xl px-4 lg:px-1">
                        <div className="bg-white   relative shadow-md sm:rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                <p className="text-black">Products</p>
                                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                    <AddProduct />
                                    <div className="flex items-center space-x-3 w-full md:w-auto">
                                        <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                            <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            Actions
                                        </button>
                                        <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400"  fill="currentColor">
                                                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                            </svg>
                                            Filter
                                            <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase  border-b  dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-4 py-3">Products</th>
                                            <th scope="col" className="px-4 py-3">Buying Price</th>
                                            <th scope="col" className="px-4 py-3">Quantity</th>
                                            <th scope="col" className="px-4 py-3">Threshold Value</th>
                                            <th scope="col" className="px-4 py-3">Expiry Date</th>
                                            <th scope="col" className="px-4 py-3">Availability</th>
                                            <th scope="col" className="px-4 py-3">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => (
                                            <tr key={product.name} className="border-b text-black " onClick={() => openProductInfo(product)}>
                                                <th scope="row" className="px-4 py-3    "> {product.name} </th>
                                                <td className="px-4 py-3">${product.price} </td>
                                                <td className="px-4 py-3">{product.quantity} Packets</td>
                                                <td className="px-4 py-3">{product.threshold_value} Packets</td>
                                                <td className="px-4 py-3">{product.expiry_date}</td>
                                                <td className="px-4 py-3">{product.availability}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    Showing
                                    <span className="font-semibold text-gray-600 ">1-10</span>
                                    of
                                    <span className="font-semibold text-gray-600 ">1000</span>
                                </span>
                                <ul className="inline-flex items-stretch -space-x-px">
                                    <li>
                                        <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 ">
                                            <span className="sr-only">Previous</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  ">1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  ">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  ">3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  ">...</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  ">100</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 ">
                                            <span className="sr-only">Next</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
