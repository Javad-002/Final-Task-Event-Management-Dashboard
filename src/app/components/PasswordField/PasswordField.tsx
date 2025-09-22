"use client"

import {useState} from "react";

const PasswordField = () => {
    const [ShowPassword, setShowPassword] = useState(false)

  return (
    <div className="w-3/4 flex flex-col gap-5">
      <input
        className="bg-[#2C2C2C] w-full h-fit p-3 text-lg rounded-xl focus:outline-2 focus:outline-[#BB86FC]"
        type={ShowPassword? "text" : "password"}
        name="password"
      />
      <div className="flex gap-2 w-full">
        <input type="checkbox" id="showPassword" onChange={(e)=>{setShowPassword(e.target.checked)}} />
        <label htmlFor="showPassword"> نمایش رمز </label>
      </div>
    </div>
  );
};

export default PasswordField;
