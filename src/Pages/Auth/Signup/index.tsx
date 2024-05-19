
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import Logo from "../../../Components/Logo";
import SignUp from "../../../Components/Auth/Signup";

export default function CreatePage(){
    return(
        <>
        
        <div className="min-h-full h-screen flex items-center justify-around py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="lg:block hidden">
            <Logo/>
        </div>
        
        <div className="max-w-md w-full space-y-8">
    
             <Header
                heading="Create an account"
                paragraph="Start your 30-day free trial. "
                />

                <SignUp/>
                <Footer   
                paragraph=" Already have an account? "
                linkName="Log in"
                linkUrl="/" />
                </div>
                </div>
        </>
    )
}