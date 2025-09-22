import PasswordField from "@/app/components/PasswordField/PasswordField";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const login = async (formData: FormData) => {
    "use server";
    const userName = formData.get("userName");
    const password = formData.get("password");
    if (userName === "admin" && password === "password") {
      const cookieStore = await cookies();
      cookieStore.set("token", "GlnsKLsrtSpsQABJN8kmO+VHIkcdTJCcxxm0sqo+ltk");
      redirect("/dashboard");
    }
  };

  return (
    <div className="w-full flex justify-center p-5">
      <form
        className="bg-[#1E1E1E] flex flex-col w-150 h-160 items-center gap-5 pt-10 rounded-2xl"
        action={login}
      >
        <h1 className="text-3xl">Login</h1>
        <span className="text-xl w-3/4 text-right">:نام کاربری</span>
        <input
          className="bg-[#2C2C2C] w-3/4 h-fit p-3 text-lg rounded-xl focus:outline-2 focus:outline-[#BB86FC]"
          type="text"
          placeholder="UserName..."
          name="userName"
          id="PasswordField"
        />
        <span className="text-xl w-3/4 text-right">:رمز عبور</span>
        <PasswordField />

        <div className="bg-[#2C2C2C] w-3/4 p-2 text-[#B0B0B0]">
          <p>userName: admin</p>
          <p>password: password</p>
        </div>

        <button
          className="bg-[#BB86FC] px-5 py-2 text-2xl rounded-2xl shadow-[#1E1E1E] hover:cursor-pointer hover:bg-[#CF9BFF] hover:text-[#F8F8F8]"
          type="submit"
        >
          ورود
        </button>
        <Link
          className="text-[#B0B0B0] hover:text-[#00C4B3] hover:translate-y-[2px] transition-all px-4 rounded-2xl"
          href={"/"}
        >
          برگشت به خانه
        </Link>
      </form>
    </div>
  );
};

export default page;
