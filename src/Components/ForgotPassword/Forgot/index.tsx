import { useState } from 'react';
import {  forgotFields } from '../../../Utils/constants';
import Input from '../../Inputs/Input';
import FormAction from '../../../Pages/Auth/Login/FormAction';
import GoogleButton from '../../Buttons/GoogleButton';
import { supabase } from '../../../Utils/api';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';



    
const fields=forgotFields;
let fieldsState:any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Forgot(){

const [forgotState,setForgotState]=useState(fieldsState);

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setForgotState({...forgotState,[e.target.id]:e.target.value})
}

const handleSubmit= async (e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(forgotState)  
        
 const forgePassword = await supabase.auth.resetPasswordForEmail(forgotState?.email, {
     redirectTo: 'http://localhost:3000/reset',
   })




   
}


return(
    <form className="mt-8 space-y-6"onSubmit={handleSubmit} >
    <div className="-space-y-px">
        {
            fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={forgotState[field.id]}
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
      
    </div>

   
   
    <FormAction text="Continue"/>
   

  </form>
)
    }
