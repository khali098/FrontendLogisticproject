import Create from "../../../Components/Auth/Signup";
import Forgot from "../../../Components/ForgotPassword/Forgot";
import Login from "../../../Components/Auth/Login";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import Reset from "../../../Components/ForgotPassword/Reset";
import Logo from "../../../Components/Logo";

export default function ResetPage(){
    return(
        <>
        <div className="min-h-full h-screen flex items-center justify-around py-12 px-4 sm:px-6 lg:px-8">
    
        <div className="lg:block hidden">
            <Logo/>
        </div>

    <div className="max-w-md w-full space-y-8">
             <Header
                heading="Reset Password"
                paragraph="Set the new password for your account so you can login and access all features "
                />

                <Reset/>
                <Footer   
                paragraph=" Don't have an account? "
                linkName="Sign up"
                linkUrl="/signup" />
                </div>
                </div>
        </>
    )
}