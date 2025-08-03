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

const Profile = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Profile</h1>
      <div className="w-full flex justify-center items-center p-6">
        <div className="w-[50%] flex flex-col justify-center items-center gap-6 border-1 p-6 rounded-lg shadow-2xl">
          <img src={logo} alt="profile picture" className="h-32 border-2 rounded-full" />
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" placeholder="First Name" value="Girish" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="text" id="lastName" placeholder="Last Name" value="Bora" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="email" value="alf@gmail.com" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" placeholder="Phone Number" maxLength={10} value="9876543210" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Select>
              <Label htmlFor="vehicle">Vehicle</Label>
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
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="account">Account Number</Label>
            <Input type="number" id="account" placeholder="Account Number" value="999999999999" />
          </div>
          <div className="w-[70%]">
            <Button variant="outline" className="w-full bg-green-500 hover:bg-green-600 text-white hover:text-white">Save Changes</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
