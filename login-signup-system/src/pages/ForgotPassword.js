import Header from "../components/Header"
import ForgotPassword from "../components/ForgotPassword"

export default function ForgotPasswordField(){
    return(
        <>
             <Header
                heading="Forgot your password"
                paragraph="Login to your account? "
                linkName="Login"
                linkUrl="/"
                />
            <ForgotPassword/>
        </>
    )
}