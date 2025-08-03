import { Outlet } from "react-router-dom"
import NavBar from "../../components/delivery/NavBar"
import Footer from "../../components/delivery/Footer"

const DeliveryLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="mx-4 flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DeliveryLayout
