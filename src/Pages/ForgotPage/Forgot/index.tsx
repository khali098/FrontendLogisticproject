import Forgot from "../../../Components/ForgotPassword/Forgot";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import Logo from "../../../Components/Logo";

export default function ForgotPage(){
    return(
        <>
        <div className="min-h-full h-screen flex items-center justify-around py-12 px-4 sm:px-6 lg:px-8">
  
        <div className="lg:block hidden">
            <Logo/>
        </div>

    <div className="max-w-md w-full space-y-8">
             <Header
                heading="Forgot Password"
             paragraph="Enter your email for the verification process, we will send 4 digits code to your email. "
                />

                <Forgot/>
                <Footer   
                paragraph=" Already have an account? "
                linkName="Log in"
                linkUrl="/" />
                </div>
                </div>
        </>
    )
}