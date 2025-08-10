import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import logo from "../../assets/image.png"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deliveryAgentRegister } from "../../services/deliveryAgentService"
import { toast } from "react-toastify"

const RegisterDeliveryAgent = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        vehicleNumber: "",
        licenseNumber: "",
        vehicleType: "",
    })

    const navigate = useNavigate();

    // const [isImage, setIsImage] = useState(false);
    // const [imageFile, setImageFile] = useState(null)
    // const [previewUrl, setPreviewUrl] = useState(logo)

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0]
    //     if (file) {
    //         setImageFile(file)
    //         const localUrl = URL.createObjectURL(file)
    //         setPreviewUrl(localUrl)
    //     }
    // }

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    const handleSelectChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            vehicleType: value,
        }))
    }

    const handleSubmit = async () => {
        console.log({ formData });

        if (formData.email && formData.firstName && formData.lastName && formData.password && formData.phone && formData.vehicleNumber && formData.vehicleType && formData.licenseNumber && formData.confirmPassword) {
            if (formData.password == formData.confirmPassword) {

                const result = await deliveryAgentRegister(formData);

                toast.success("Agent registered successfully.")
                navigate("/delivery/login");
            }
            else {
                toast.error("Passwords do not match.")
            }
        }
        else {
            toast.error("All fields are required.")
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-6 text-orange-600">Delivery Agent Register</h1>
            <div className="w-full flex justify-center items-center p-6">
                <div className="w-[50%] flex flex-col justify-center items-center gap-6 border-1 p-6 rounded-lg shadow-2xl">
                    {/* <img src={previewUrl} alt="register" className="h-32 border-2 rounded-full" />

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="profilePic">Profile Picture</Label>
                        <Input id="profilePic" type="file" accept="image/*" onChange={handleFileChange} />
                    </div> */}

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="phone">Phone</Label>
                        <Input type="text" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input type="password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                        <Input type="text" id="vehicleNumber" placeholder="Vehicle Number" value={formData.vehicleNumber} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="licenseNumber">License Number</Label>
                        <Input type="text" id="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label>Vehicle</Label>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select vehicle" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="MOTORCYCLE">Motorcycle</SelectItem>
                                    <SelectItem value="CAR">Car</SelectItem>
                                    <SelectItem value="BICYCLE">Bicycle</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-[70%]">
                        <Button
                            variant="outline"
                            className="w-full bg-orange-600 hover:bg-orange-500 text-white hover:text-white"
                            onClick={handleSubmit}
                        >
                            Register
                        </Button>
                    </div>

                    <div>
                        Already have an account. Click{" "}
                        <Link to="/delivery/login" className="text-orange-500 underline">here</Link>.
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterDeliveryAgent
