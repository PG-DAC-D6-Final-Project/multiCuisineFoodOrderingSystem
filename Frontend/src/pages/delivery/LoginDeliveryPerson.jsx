import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import logo from "../../assets/image.png"
import { useState } from "react"
import { deliveryAgentLogin } from "../../services/deliveryAgentService"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

const LoginDeliveryPerson = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email && password) {
      const result = await deliveryAgentLogin(formData);

      if (result?.email) {
        toast.success("Login successful")
        sessionStorage.setItem("firstName", result.firstName)
        sessionStorage.setItem("lastName", result.lastName)
        sessionStorage.setItem("email", result.email)
        sessionStorage.setItem("phone", result.phone)
        sessionStorage.setItem("vehicleNumber", result.vehicleNumber)
        sessionStorage.setItem("vehicleType", result.vehicleType)
        sessionStorage.setItem("licenseNumber", result.licenseNumber)
        navigate("/delivery");
      }
      else {
        toast.error("Invalid email or password");
      }

    } else {
      toast.error("Please enter email and password");
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <div className="w-full flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-[50%] flex flex-col justify-center items-center gap-6 border-1 p-6 rounded-lg shadow-2xl"
        >
          <img src={logo} alt="login" className="h-32 border-2 rounded-full" />

          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-[70%]">
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white hover:text-white"
            >
              Login
            </Button>
          </div>
          <div>Don't have an account. Click <Link to="/delivery/register" className="text-orange-500 underline">here</Link>.</div>
        </form>
      </div>
    </>
  )
}

export default LoginDeliveryPerson
