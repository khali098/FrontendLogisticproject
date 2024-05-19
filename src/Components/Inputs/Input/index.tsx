
const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm "

interface InputProps{
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string,
    labelText:string,
    labelFor:string,
    id:string,
    name:string,
    type:string,
    isRequired:boolean,
    placeholder:string,
    customClass?:string,
}
export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass,
    
}:InputProps){
    return(
        <div className="my-2">
            <label className="block text-gray-700 text-sm font-bold  text-start" >
              {labelText}
            </label>
            <div className="my-2">
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
            />
            </div>
          </div>
    )
}