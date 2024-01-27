import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="hidden font-normal mb-2 px-4 py-4 sm:px-6 text-gray-500  text-sm  sm:flex items-center justify-between">
    <p className="">
      Untitled UI 2077
    </p>
    <Link to="/cart">help@untitledui.com</Link>
  </div>
  )
}

export default Footer