import { useState } from 'react';
import { resetFields } from '../../../Utils/constants';
import Input from '../../Inputs/Input';
import FormAction from '../../../Pages/Auth/Login/FormAction';
import { toast } from 'react-toastify';
import { supabase } from '../../../Utils/api';

const fields=resetFields;
let fieldsState:any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Reset(){
    const [resetState,setResetState]=useState(fieldsState);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setResetState({...resetState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
       


        if (resetState?.password !== resetState?.confirmPassword){
            toast.error("Passwords are not the same")
        }   else {
            resetPassword()
        }
        
    }

    const resetPassword = async ()=>{
        
const {password} = resetState
const {data, error} = await supabase.auth.updateUser({ password })

if (!error){
    toast.success('Password update successfully')
}
    }

    return(
        
        <form className="mt-8 space-y-6"onSubmit={handleSubmit} >
        <div className="-space-y-px">
            
            {
                fields.map(field=>
                        <Input
                        
                            key={field.id}
                            handleChange={handleChange}
                            value={resetState[field.id]}
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
        <FormAction text="Update Password"/>
        </form>
    )
}