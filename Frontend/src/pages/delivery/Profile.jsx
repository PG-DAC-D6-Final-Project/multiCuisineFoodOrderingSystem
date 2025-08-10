import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { updateProfile } from "../../services/deliveryAgentService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [agentProfile, setAgentProfile] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    vehicleType: "",
    licenseNumber: "",
  });

  useEffect(() => {
    setAgentProfile({
      id: sessionStorage.getItem("deliveryId") || "",
      firstName: sessionStorage.getItem("deliveryFirstName") || "",
      lastName: sessionStorage.getItem("deliveryLastName") || "",
      email: sessionStorage.getItem("deliveryEmail") || "",
      phone: sessionStorage.getItem("deliveryPhone") || "",
      vehicleNumber: sessionStorage.getItem("deliveryVehicleNumber") || "",
      vehicleType: sessionStorage.getItem("deliveryVehicleType") || "",
      licenseNumber: sessionStorage.getItem("deliveryLicenseNumber") || "",
    });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAgentProfile((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleVehicleTypeChange = (value) => {
    setAgentProfile((prev) => ({
      ...prev,
      vehicleType: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const result = await updateProfile(agentProfile)
      if (result.status === 200) {
        toast.success("Update successful")
        sessionStorage.setItem("deliveryId", result.data.id)
        sessionStorage.setItem("deliveryFirstName", result.data.firstName)
        sessionStorage.setItem("deliveryLastName", result.data.lastName)
        sessionStorage.setItem("deliveryEmail", result.data.email)
        sessionStorage.setItem("deliveryPhone", result.data.phone)
        sessionStorage.setItem("deliveryVehicleNumber", result.data.vehicleNumber)
        sessionStorage.setItem("deliveryVehicleType", result.data.vehicleType)
        sessionStorage.setItem("deliveryLicenseNumber", result.data.licenseNumber)
        navigate("/delivery");
      }
      else {
        toast.error("Updation failed");
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Profile
      </h1>

      <div className="w-full flex justify-center items-center p-6">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8 flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={agentProfile.firstName}
              onChange={handleChange}
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={agentProfile.lastName}
              onChange={handleChange}
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={agentProfile.email}
              onChange={handleChange}
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              maxLength={10}
              value={agentProfile.phone}
              onChange={handleChange}
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="vehicleType">Vehicle</Label>
            <Select onValueChange={handleVehicleTypeChange} value={agentProfile.vehicleType}>
              <SelectTrigger className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500">
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

          <div className="grid gap-2">
            <Label htmlFor="vehicleNumber">Vehicle Number</Label>
            <Input
              type="text"
              id="vehicleNumber"
              placeholder="Vehicle Number"
              value={agentProfile.vehicleNumber}
              onChange={handleChange}
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="licenseNumber">License Number</Label>
            <Input
              type="text"
              id="licenseNumber"
              placeholder="License Number"
              value={agentProfile.licenseNumber}
              onChange={handleChange}
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div className="mt-4">
            <Button
              onClick={handleUpdate}
              variant="outline"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
