"use client";
import { ILoginResponse } from "@/app/(auth)/login/page";
import PasswordField from "../PasswordField/PasswordField";
import Link from "next/link";
import { FC, useActionState } from "react";
import { SubmitBTN } from "../SubmitBTN/SubmitBTN";

interface IProp {
  action: (
    prevState: ILoginResponse,
    formData: FormData
  ) => Promise<ILoginResponse>;
}

const LoginForm: FC<IProp> = ({ action }) => {
  const initialState: ILoginResponse = { message: "" };
  const [state, formAction, pending] = useActionState(action, initialState);
  console.log("state: ", state, "pending: ", pending);
  return (
    <form
      className="bg-[#1E1E1E] flex flex-col w-150 h-160 items-center gap-5 pt-10 rounded-2xl"
      action={formAction}
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
      <SubmitBTN />
      <Link
        className="text-[#B0B0B0] hover:text-[#00C4B3] hover:translate-y-[2px] transition-all px-4 rounded-2xl"
        href={"/"}
      >
        برگشت به خانه
      </Link>
    </form>
  );
};

export { LoginForm };
