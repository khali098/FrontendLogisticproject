import { useState } from 'react';
import { loginFields } from '../../../Utils/constants';
import Input from '../../Inputs/Input';
import FormExtra from '../../../Pages/Auth/Login/FormExtra';
import FormAction from '../../../Pages/Auth/Login/FormAction';
import { useAppDispatch } from '../../../Utils/hooks';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { handleSignInWithGoogle, login } from '../../../Data/slices/auth';
import validateEmail from '../../../ContoleSaisie';
import GoogleButton from '../../Buttons/GoogleButton';


const fields=loginFields;
let fieldsState:any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }
        //Handle Login API Integration here
        const authenticateUser = async () => {
         await  dispatch(login(loginState))
    
      // const settedSession = await supabase.auth.setSession({
      //   access_token : data?.session.access_token,
      //   refresh_token : data?.session.refresh_token
      // })
    
        }
        const handleGoogleLogin = async () => {
            
            await handleSignInWithGoogle(); // Utilisez la fonction handleSignInWithGoogle lors du clic sur le bouton Google
            // Gérer la suite de la connexion ici, par exemple rediriger vers la page d'inventaire
            navigate('/inventory');
        }

    const handleSubmit= async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await authenticateUser();
        navigate('/inventory')
     
    }



    return(
        
        <form className="mt-8 space-y-6"onSubmit={handleSubmit} >
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                        
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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

       
        <FormExtra chechboxText='Remember for 30 days ' linkText=' Forgot password' linkUrl="/forgot"/>
        <FormAction text="Sign in"/>
        <GoogleButton onClick={handleGoogleLogin} />
       
      </form>
    )
}