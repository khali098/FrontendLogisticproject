import React, { useState } from "react";
import logo from '../../Assets/logo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCircleUser, faCube, faDolly, faGear, faHouse, faRectangleList, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { logout } from "../../Data/slices/auth";
import { useNavigate } from "react-router-dom";
import Table from "../Modal/Table/index";
import { useSelector } from "react-redux";


export default function SideBar() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);

    
    const [authenticated, setAuthenticated]=useState(false)
    const {isAuthenticated} = useAppSelector(state=>state.auth)
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const handleLogout=()=>{

        dispatch(logout())
        // navigate("/")
    }

    

    return (
        <>
            <div className="w-full h-full bg-gray-200 ">
                <div className="flex flex-no-wrap  ">
                    {/* Sidebar starts */}
                    <div className="absolute lg:relative w-64 h-screen shadow bg-white hidden lg:block  ">
                        <div className="h-16 w-full flex items-center px-8">
                        <img 
                               alt=""
                               className="h-10 w-14"
                               src={logo}/>
                        </div>
                        <ul aria-orientation="vertical" className=" py-6  ">
                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                    <div>
                                    <FontAwesomeIcon icon={faHouse} color='gray'  />
                                    </div>
                                    <span className="ml-2 ">Dashboard</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faDolly} color='gray'  />
                                 
                                    <span className="ml-2">Inventory</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faSquarePollVertical} color='gray'/>

                                    <span className="ml-2">Reports</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faCircleUser} color='gray' />

                                    <span className="ml-2">Suppliers</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faCube} color='gray'/>

                                    <span className="ml-2">Orders</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faRectangleList} color='gray'/>

                                    <span className="ml-2">Manage Store</span>
                                </div>
                            </li>
                        </ul>

                        <ul aria-orientation="vertical" className=" py-24  ">
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faGear} color='gray'/>
                                    <span className="ml-2">Settings</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faArrowRightFromBracket}  color='gray'/>

                                    <span className="ml-2" onClick={()=>handleLogout()}>Logout</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-white lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="flex items-center justify-between px-8">
                                        <div className="h-16 w-full flex items-center">
                                        <img 
                                             alt=""
                                             className="h-10 w-14"
                                             src={logo}/>
                                        </div>
                                        <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul aria-orientation="vertical" className=" py-6">
                                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <FontAwesomeIcon icon={faHouse} color='gray'  />

                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Dashboard</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <FontAwesomeIcon icon={faDolly} color='gray' />

                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Inventory</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                            <div className="flex items-center">
                                            <FontAwesomeIcon icon={faSquarePollVertical} color='gray'/>

                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Reports</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                            <div className="flex items-center">
                                            <FontAwesomeIcon icon={faCircleUser} color='gray' />

                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Suppliers</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                            <div className="flex items-center">
                                            <FontAwesomeIcon icon={faCube} color='gray'/>

                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Orders</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                            <div className="flex items-center">
                                            <FontAwesomeIcon icon={faRectangleList} color='gray'/>

                                                <span className="ml-2 xl:text-base md:text-2xl text-base">Manage Store</span>
                                            </div>
                                        </li>
                                      
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <div className="flex justify-center mb-4 w-full px-6">
                                        <div className="relative w-full">
                                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={10} cy={10} r={7} />
                                                    <line x1={21} y1={21} x2={15} y2={15} />
                                                </svg>
                                            </div>
                                            <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search product, supplier, order" />
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between px-6 pt-1">
                                            <div className="flex items-center">
                                                <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                                <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                            </div>
                                            <ul className="flex">
                                                <li className="cursor-pointer text-white pt-5 pb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                    </svg>
                                                </li>
                                                <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                            <div className="hidden lg:flex w-full pr-6">
                                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                    <div className="relative w-full">
                                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div>
                                        <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search product, supplier, order" />
                                    </div>
                                </div>
                                <div className="w-1/2 hidden lg:flex">
                                    <div className="w-full flex items-center pl-8 justify-end">
                                        <div className="h-full w-20 flex items-center justify-center border-r border-l">
                                            <div className="relative cursor-pointer text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                </svg>
                                                <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                            </div>
                                        </div>
                                       
                                        <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                            <div className="rounded-full">
                                                {profile ? (
                                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <circle cx={12} cy={7} r={4} />
                                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                                </svg>
                                                                <span className="text-sm ml-2">My Profile</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                                </svg>
                                                                <span className="text-sm ml-2">Sign out</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                                <div className="relative">
                                                    <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="avatar" />
                                                    <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                                </div>
                                            </div>
                                            <p className="text-gray-800 text-sm mx-3">Jane Doe</p>
                                            <div className="cursor-pointer text-gray-600">
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </nav>
                        {/* Navigation ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                              <Table name={""} price={0} quantity={0} threshold_value={0} expiry_date={undefined} availability={""} id={0} category="" unit="" image_url={null} />   
                   
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            <div className="w-full h-full rounded ">{/* Place your content here */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}