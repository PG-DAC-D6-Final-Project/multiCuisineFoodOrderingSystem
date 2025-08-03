import { BsCurrencyRupee } from "react-icons/bs"

const DashboardCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[100%] border rounded-xl shadow-2xl basis-3xl">
            <div>
                {icon}
            </div>
            <div className="my-4 text-xl font-bold">{title}</div>
            {/* <div className="text-xl mb-6">{description}</div> */}
            {description}
        </div>
    )
}

export default DashboardCard
