import logo from "../../assets/image.png";

const NavBar = () => {
    return (
        <nav className="bg-white h-20 flex items-center sticky top-0 z-50 p-2">
            <ul className="bg-orange-400 flex justify-around items-center h-[88%] w-[100%] rounded-lg text-white text-xl font-medium">
                <li className="cursor-pointer hover:font-bold"><img src={logo} alt="logo" className="h-12 rounded-[50%]" /></li>
                <li className="cursor-pointer hover:font-bold">Active</li>
                <li className="cursor-pointer hover:font-bold">Available</li>
                <li className="cursor-pointer hover:font-bold">History</li>
                <li className="cursor-pointer hover:font-bold">Profile</li>
                <li className="cursor-pointer hover:font-bold">Logout</li>
            </ul>
        </nav>
    )
}

export default NavBar
