import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement } from "react";
import GoogleButton from "../../../Components/Buttons/GoogleButton";

export const googleIcon= <FontAwesomeIcon icon={faGoogle} />

interface FormActionProps{
    handleSubmit?: (e:React.ChangeEvent<HTMLButtonElement>)=>void,
    type?:string,
    action?:"button" | "reset" | "submit",
    text:string,
    className?: string,
    icon?:ReactElement;
}

export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text,
    className,
    icon
}:FormActionProps){
    return(
        <>
        <div className="gp"></div>
        {
            type==='Button' ?
            <button
            
                type={action}
                className={className ? className : "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"}
                onSubmit={handleSubmit}
            >
                      
      {icon}      
      {text}
            </button>
            
            :
            <></>
        }
        
     
        </>
        
    )
}
