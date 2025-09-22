import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const deleteToken = async () => {
  "use server"
  const cookieStore = await cookies()
  cookieStore.delete("token");
  redirect("/")
}


const DashboardLayout: FC<IChildren> = ({ children }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <div className="bg-[#2A2A2A] h-10 w-80 m-5 rounded-3xl mx-auto flex gap-5 justify-evenly items-center text-[#E0E0E0] text-xl select-none">
        <Link className="text-[#03DAC6] hover:text-[#00C4B3] hover:translate-y-[2px] transition-all px-4 rounded-2xl" href={"/"}>خانه</Link>
        <Link onClick={deleteToken} className="text-[#03DAC6] hover:text-[#00C4B3] hover:translate-y-[2px] transition-all px-4 rounded-2xl" href={"/"}>خروج از حساب</Link>
      </div>

      {children}
    </div>
  );
};

export default DashboardLayout;
