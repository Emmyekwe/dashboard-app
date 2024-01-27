import logo from '../assets/images/Logomark.svg'
import Button from './Button'

const Verification = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-[96px] '>
            <img className='max-w-full max-h-full mb-6' src={logo} alt="Logo" />
            <h1 className='font-semibold text-3xl text-gray-900 mb-3'>Enter your verification code</h1>
            <p className='text-gray-500 text-base font-medium mb-8'>Your OTP is <span className='text-black'>463-291.</span> Resets in 00:30</p>
            <div className="flex flex-row items-center space-x-1 mx-8">
              <div className="w-16 h-16 ">
                <input placeholder="0" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16 ">
                <input placeholder="0" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16 ">
                <input placeholder="0" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <span className='text-gray-300 text-3xl'>-</span>
              <div className="w-16 h-16 ">
                <input placeholder="0" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16 ">
                <input placeholder="0" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <div className="w-16 h-16 ">
                <input placeholder="0" className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
            </div>

            <div className="text-center mt-4 w-[400px] sm:w-[450px] mx-2">
                <Button type="primary" to="/success"> Submit OTP</Button>
                <p className='mt-6 text-gray-500'><Button to="/">Back to sign up</Button> </p>
            </div>
            

        </div>
       

    </div>
  )
}

export default Verification