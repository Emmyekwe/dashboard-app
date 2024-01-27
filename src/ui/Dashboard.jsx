import { Link } from "react-router-dom"
import logo from '../assets/images/Logomark.svg'


const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10  px-4 gap-4  pt-12 sm:px-8 sm:py-8">
        <div className="md:col-span-2 border-r-2 border-gray-25">     
                <header className='space-x-1 flex items-center  uppercase'>
                    
                <img src={logo} alt="Logo" />
                <Link className=' tracking-widest' to="/">Untitled UI</Link>
            </header>
            <div className="hidden sm:block mt-4 bg-[#F9F5FF] p-2 rounded-lg mr-4">
                <p className="text-[#6941C6]">Home</p>
            </div>
        </div>


        <div className="sm:col-span-7 flex flex-col sm:flex-row justify-between bg-[#fcfcfd] px-[32px] pt-[32px] h-[348px] w-full">
            <div className="w-full">
                <h1 className="font-medium text-3xl mb-2">Assessment Dashboard</h1>
                <p className="text-gray-500 font-normal text-base">Welcome back, Emmanuel</p>

                <div>
                    <button className="mt-2 sm:mt-0 sm:hidden bg-[#7F56D9] text-white p-2 rounded-lg" >logout</button>
                </div>

                <div className="bg-white border-1 border border-gray-25 mt-[32px] p-[24px] rounded-lg ">
                    <p className="py-4 border-b border-1-gray-50">Below are your details</p>
                    <div className="mt-2 flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-gray-900 font-medium text-sm">User name</p>
                            <p className="text-gray-500 text-sm font-medium">User email</p>
                        </div>
                            <p className="justify-center font-medium text-sm">
                                ID: 203491
                            </p>
                    </div>
                </div>
            </div>
            <div>
                <button className="hidden sm:block bg-[#7F56D9] text-white p-2 rounded-lg" >logout</button>
            </div>
            
        </div>
    </div>
   
  )
}

export default Dashboard