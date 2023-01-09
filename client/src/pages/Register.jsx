import React from 'react'
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[#96B9D9]">
    <h1 className="text-5xl text-[#262f41] p-6 font-bold">Register</h1>
    <form className="flex flex-col p-12 bg-white w-80 gap-5 rounded">
      <input required type="text" placeholder="Username" className="p-2 border-b-2 border-b-solid border-b-[#435373]" />
      <input required type="email" placeholder="Email" className="p-2 border-b-2 border-b-solid border-b-[#435373]" />
      <input required type="password" placeholder="Password" className="p-2 border-b-2 border-b-solid border-b-[#435373]" />
      <input required type="password" placeholder="Confirm Password" className="p-2 border-b-2 border-b-solid border-b-[#435373]" />
      <button className="bg-[#435373] text-white font-semibold p-2 rounded cursor-pointer">Register</button>
      <p className="text-red-500 text-sm text-center">Error</p>
      <span className="text-center ">Account? <Link to={"/login"} className="text-[#96b9d9] font-semibold">Login</Link></span>
    </form>
  </div>
  )
}

export default Register