import success from '../assets/images/success.svg'
import Button from './Button'


const Success = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center mt-[96px]'>
                <img className='max-w-full max-h-full mb-6' src={success} alt="Logo" />
                <h1 className='font-semibold text-3xl text-gray-900 mb-3'>Account verified</h1>
                <p className='text-gray-500 text-base font-medium mb-8'>Click below to log in.</p>
                <div className="text-center mt-4 w-[400px] sm:w-[450px]">
                    <Button type="primary" to="/log-in">Continue</Button>
                </div>
            </div>
           
    
        </div>
      )
}

export default Success