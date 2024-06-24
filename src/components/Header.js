import React from 'react'
import logo from '../images/xogene.png'

const Header = () =>{
    return(
        <div className="flex justify-center bg-gray-50 shadow-md shadow-black">
            <img src={logo} alt="Xogene" />
        </div>
    )
}
export default Header