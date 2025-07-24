import { Outlet } from "react-router-dom"
import NavBar from "../../components/delivery/NavBar"
import Footer from "../../components/delivery/Footer"

const DeliveryLayout = () => {
    return (
        <>
            <NavBar />
            <main className="mx-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DeliveryLayout
