import { LoginForm } from "@/app/components/LoginForm/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

  export interface ILoginResponse {
    message: string;
  }

  const login = async (
    prevState: ILoginResponse,
    formData: FormData
  ): Promise<ILoginResponse> => {
    "use server";
    const userName = formData.get("userName");
    const password = formData.get("password");
    if (userName === "admin" && password === "password") {
      const cookieStore = await cookies();
      cookieStore.set("token", "GlnsKLsrtSpsQABJN8kmO+VHIkcdTJCcxxm0sqo+ltk");
      redirect("/dashboard");
    }
    return {message:"نام کاربری یا رمز عبور اشتباه است"}
  };

const page = () => {
  return (
    <div className="w-full flex justify-center p-5">
      <LoginForm action={login} />
    </div>
  );
};

export default page;
