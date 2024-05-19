

  
interface CodeVerificationProps{
    handleChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value?:string,
    id?:string,
    name?:string,
    type?:string,
    isRequired?:boolean,
    labelText?:string
 
}
export default function CodeVerification({
    handleChange,
    value,
    id,
    name,
    type,
    isRequired=false,
    labelText

}:CodeVerificationProps){
    return(
        <div className="my-5 " >
        <label className="block text-gray-700 text-sm font-bold mb-2 " >
          {labelText}
        </label>
        <form action="" method="post">
        <div className="flex flex-col space-y-16  ">
          <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div className="w-16 h-16 ">
              <input onChange={handleChange} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" value={value} type={type} name={name} id="1"/>
            </div>
            <div className="w-16 h-16 ">
              <input onChange={handleChange} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" value={value} type={type} name={name} id="2"/>
            </div>
            <div className="w-16 h-16 ">
              <input onChange={handleChange} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" value={value} type={type} name={name} id="3"/>
            </div>
            <div className="w-16 h-16 ">
              <input onChange={handleChange} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" value={value} type={type} name={name} id="4"/>
            </div>
          </div>  
          </div>  
          </form>
          </div>
          
         
    )
}