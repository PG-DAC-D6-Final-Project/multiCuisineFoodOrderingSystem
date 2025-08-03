import { Button } from "@/components/ui/button"
const Header = ()=>{
    return(
        <>
            <div className="admin-header flex items-center justify-between bg-gray-800 p-4 mb-1">
                <div className="nav-left">
                    <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                    <h4
                    className="text-md text-gray-400">Manage your food delivery platform</h4>

                </div>
                <div className="flex items-center gap-5">
                    <Button className="bg-yellow-400">Export Data</Button>
                    <div className="image bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center border-amber-400 border-1">
                        <p>A</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header