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

const RegisterDeliveryAgent = () => {
    // const [isImage, setIsImage] = useState(false);
    const [imageFile, setImageFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(logo)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageFile(file)
            const localUrl = URL.createObjectURL(file)
            setPreviewUrl(localUrl)
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <div className="w-full flex justify-center items-center p-6">
                <div className="w-[50%] flex flex-col justify-center items-center gap-6 border-1 p-6 rounded-lg shadow-2xl">
                    <img src={previewUrl} alt="register" className="h-32 border-2 rounded-full" />

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="profilePic">Profile Picture</Label>
                        <Input id="profilePic" type="file" accept="image/*" onChange={handleFileChange} />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" id="firstName" placeholder="First Name" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input type="text" id="lastName" placeholder="Last Name" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input type="password" id="confirmPassword" placeholder="Confirm Password" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                        <Input type="password" id="vehicleNumber" placeholder="Vehicle Number" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="licenseNumber">License Number</Label>
                        <Input type="password" id="licenseNumber" placeholder="License Number" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label>Vehicle</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select vehicle" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="motorcycle">Motorcycle</SelectItem>
                                    <SelectItem value="car">Car</SelectItem>
                                    <SelectItem value="bicycle">Bicycle</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-[70%]">
                        <Button variant="outline" className="w-full bg-orange-400 hover:bg-orange-500 text-white hover:text-white">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterDeliveryAgent
