import { useState } from 'react';
import { createFields } from '../../../Utils/constants';
import Input from '../../Inputs/Input';
import FormAction, { googleIcon } from '../../../Pages/Auth/Login/FormAction';
import { useAppDispatch } from '../../../Utils/hooks';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { signup } from '../../../Data/slices/auth';
import GoogleButton from '../../Buttons/GoogleButton';



    
const fields=createFields;
let fieldsState:any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function SignUp(){

const [signupState,setSignupState]=useState(fieldsState);

const dispatch=useAppDispatch()

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setSignupState({...signupState,[e.target.id]:e.target.value})
}

const handleSubmit= async (e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(signup({email:signupState?.email, password:signupState?.password}))
}

return(
    <form className="mt-8 space-y-6"onSubmit={handleSubmit} >
    <div className="-space-y-px">
        {
            fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                />
            
            )
        }
        <p className="text-gray-500 text-xs text-start ">Must be at least 8 charachters.</p>
    </div>

   
   
    <FormAction text="Get started"/>
    

  </form>
)
    }
