import { Link } from "react-router-dom";
import logo from "../../assets/image.png";
import { FaMotorcycle } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="bg-white h-20 flex items-center sticky top-0 z-50 p-2">
            <ul className="bg-orange-400 flex justify-around items-center h-[88%] w-[100%] rounded-lg text-white text-xl font-medium">
                <li className="cursor-pointer hover:font-bold"><Link to="/delivery"><img src={logo} alt="logo" className="h-12 rounded-[50%]" /></Link></li>
                <li className="cursor-pointer hover:font-bold"><Link to="/delivery/active"><div className="flex justify-center items-center gap-2"><FaMotorcycle size={26} /><span>Active</span></div></Link></li>
                <li className="cursor-pointer hover:font-bold"><Link to="/delivery/available"><div className="flex justify-center items-center gap-2"><FaListAlt size={26} /><span>Available</span></div></Link></li>
                <li className="cursor-pointer hover:font-bold"><Link to="/delivery/history"><div className="flex justify-center items-center gap-2"><FaHistory size={26} /><span>History</span></div></Link></li>
                <li className="cursor-pointer hover:font-bold"><Link to="/delivery/profile"><div className="flex justify-center items-center gap-2"><FaUser size={26} /><span>Profile</span></div></Link></li>
                <li className="cursor-pointer hover:font-bold"><div className="flex justify-center items-center gap-2"><FaPowerOff size={26} /><span>Log Out</span></div></li>
            </ul>
        </nav>
    )
}

export default NavBar
