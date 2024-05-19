import { Link } from "react-router-dom"

interface FormExtraProps{
  chechboxText:string,
  linkText:string
  linkUrl?: string
}
export default function FormExtra({chechboxText, linkText,  linkUrl="#"}:FormExtraProps){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
           
            {chechboxText}
          </label>
        </div>

        <div className="text-sm">
          <Link to={linkUrl}  className="font-medium text-blue-600 hover:text-blue-500">
          
            {linkText}
          </Link>
         
        </div>
      </div>

    )
}