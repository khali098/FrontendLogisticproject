import Login from "../../../Components/Auth/Login";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import Logo from "../../../Components/Logo";

export default function LoginPage(){
    return(
        <>
        <div className="min-h-full h-screen flex items-center justify-around py-12 px-4 sm:px-6 lg:px-8 ">

        <div className="lg:block hidden">
            <Logo/>
        </div>

    <div className="max-w-md w-full space-y-8 ">
             <Header
                heading="Log in to your account"
                paragraph="Welcome back! Please enter your details. "
                />

                <Login/>
                <Footer   paragraph=" Don't have an account? "
                linkName="Sign up"
                linkUrl="/signup" />
                </div>
                </div>
        </>
    )
}