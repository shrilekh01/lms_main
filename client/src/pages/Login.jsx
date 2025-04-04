import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };
  const handleRegistration = (type) =>{
    console.log(signupInput);
    console.log(loginInput);
    
  }
  return (
    <div className="flex item-center w-full justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Signup</TabsTrigger>
          <TabsTrigger value="password">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click sign up when you are done
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  placeholder="Eg. shrilekh"
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"signup")}
                  name="name"
                  value={signupInput.name}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  type="email"
                  placeholder="Eg. shrilekh@gmail.com"
                  name="email"
                  value={signupInput.email}
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  placeholder="Eg. shrilekh#129"
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"signup")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=> handleRegistration("signup")}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials and you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  name="email"
                  value={signupInput.email}
                  type="email"
                  placeholder="Eg. shrilekh@gmail.com"
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"login")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  placeholder="Eg. shrilekh#129"
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"login")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=> handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Login;
