import logo from "../../assets/image.png"
import menu from "../../assets/hamburger.png"
import { useState } from "react"

const NavBarTest = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const displayMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <>
            <nav className='bg-orange-400 h-20 flex items-center cursor-pointer'>
                <div className="flex justify-between items-center w-[100%] md:w-[20%]">
                    <img src={logo} alt="logo" className='h-16 m-2 rounded-[50%]' />
                    <img src={menu} alt="logo" className='h-16 m-2 md:hidden' onClick={displayMobileMenu} />
                </div>
                <ul className="w-[100%] mt-0.5 p-2 text-white text-md font-medium hidden md:flex justify-around items-center cursor-pointer">
                    <li className="text-center m-2 hover:font-bold">Current Orders</li>
                    <li className="text-center m-2 hover:font-bold">New Orders</li>
                    <li className="text-center m-2 hover:font-bold">History</li>
                    <li className="text-center m-2 hover:font-bold">Update Profile</li>
                    <li className="text-center m-2 hover:font-bold">Availability</li>
                </ul>
            </nav>
            {
                showMobileMenu &&
                <ul className="bg-orange-400 flex-col justify-center items-center mt-0.5 p-2 text-white text-xl font-medium">
                    <li className="text-center m-2">Current Orders</li>
                    <li className="text-center m-2">New Orders</li>
                    <li className="text-center m-2">History</li>
                    <li className="text-center m-2">Update Profile</li>
                    <li className="text-center m-2">Availability</li>
                </ul>
            }
        </>
    )
}

export default NavBarTest
