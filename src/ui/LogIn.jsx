import Button from "./Button";
import { Form } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import screen from '../assets/images/Screen.svg'

const LogIn = () => {
    return (
        <div className='sm:grid grid-cols-2'>
    
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
              <Header />
              <div className="my-10 px-4 sm:my-16  justify-center sm:mx-[180px]">
                <h1 className="mb-8 text-2xl font-semibold sm:text-3xl">
                  Log In
                  <br />
                  <span className="text-base text-gray-500 font-normal">
                  Welcome back! Please enter your details.
                  </span>
                </h1>
    
                <Form method="POST"> 
    
                  <div className="mb-5 flex flex-col gap-2 sm:flex-col ">
                    <label  className=" text-gray-700">Email</label>
                      <input className="input grow" type="text" name="phone" placeholder="Enter your email" required />
                  </div>
    
                  <div className="mb-5 flex flex-col gap-2 sm:flex-col ">
                    <label  className=" text-gray-700">Password</label>
                      <input className="input grow" type="password" name="phone" placeholder="*******" required />
                  </div>

                  <div className="flex mb-4 flex-row sm:flex sm:my-4 items-center justify-between">
                    <div className="flex items-center">
                        <input  type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label  className="ms-2 text-sm font-medium">Remember for 30 days</label>
                    </div>
                    <p className="text-[#7F56D9] font-medium font-base">Forgot password</p>
                  </div>


    
                  <div className="text-center mb-2 sm:mb-20 ">
                    <Button type="primary" to="/dashboard">Sign In</Button>
                  </div>
                  <div className="text-center mt-8">
                    <span className="text-gray-500 font-normal text-sm ">
                    Dont have an Account? <span className="text-[#7F56D9] font-medium"><Button to="/">Sign Up</Button></span>
                    </span>
                  </div>

                </Form>
                </div>
    
    
                <Footer />
    
                
              </div>
    
              <div className='hidden sm:flex items-center justify-end h-screen bg-gray-100'>
                    <img className='max-w-full max-h-full' src={screen} alt="screen" />
                </div>
    
        </div>
      );
}

export default LogIn