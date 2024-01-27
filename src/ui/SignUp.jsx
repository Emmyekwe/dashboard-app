import Button from "./Button";
import { Form } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import screen from '../assets/images/Screen.svg'




function SignUp() {
  return (
    <div className='sm:grid grid-cols-2'>

<div className='grid grid-rows-[auto_1fr_auto] h-screen'>
          <Header />
          <div className="my-10 px-4 sm:my-16  justify-center sm:mx-[180px]">
            <h1 className="mb-8 text-2xl font-semibold sm:text-3xl">
              Sign Up
              <br />
              <span className="text-base text-gray-500 font-normal">
              Start your 30-day free trial.
              </span>
            </h1>

            <Form method="POST"> 
                <div className="mb-5 flex flex-col gap-2 sm:flex-col ">
                  <label className=" text-gray-700">Name*</label>
                  <input className="input grow" type="text" name="name" placeholder="Enter your name" required />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-col ">
                  <label  className=" text-gray-700">Username*</label>
                    <input className="input grow" type="text" name="username" placeholder="Enter your username" required />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-col ">
                  <label  className=" text-gray-700">Email*</label>
                    <input className="input grow" type="text" name="email" placeholder="Enter your email" required />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-col ">
                  <label  className=" text-gray-700">Password*</label>
                    <input className="input grow" type="password" name="password" placeholder="Create a password" required />
                    <p className="text-gray-500 mt-2 font-normal text-sm">Must be at least 8 characters.</p>
                </div>

                <div className="text-center">
                  <Button type="primary" to="/verification"> Create Account</Button>
                </div>

                <div className="text-center mt-8">
                  <span className="text-gray-500 font-normal text-sm ">
                  Already have an Account? <span className="text-[#7F56D9] font-medium"><Button to="log-in">Log In</Button></span>
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

export default SignUp;
