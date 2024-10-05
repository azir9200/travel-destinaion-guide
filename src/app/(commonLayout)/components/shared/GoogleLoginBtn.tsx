"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

const GoogleLoginBtn = () => {
  return (
    <Button
      onClick={() => {
        signIn("google", { callbackUrl: "http://localhost:3000/api/auth/callback/google" });
      }}
    >
      Log In With Google
    </Button>
  );
};

// const GoogleLoginBtn = () =>{
//   return(
//     <Button onClick={() =>{signIn("google", {callbackUrl: "/"}); } }>Log in With Google</Button>
//   )
// }

export default GoogleLoginBtn;
 