"use client"
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const LogOut = () => {
    const handleClick=()=>{
        signOut()
    }
    return ( 
            <Button variant="link" onClick={handleClick}>Logout</Button>
     );
}
 
export default LogOut;