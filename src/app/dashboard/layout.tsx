import Link from "next/link";
import { FC, ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const DashboardLayout: FC<IChildren> = ({ children }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      <div className="bg-[#2A2A2A] h-10 w-80 m-5 rounded-3xl mx-auto flex gap-5 justify-evenly items-center text-[#E0E0E0] text-xl">
        <Link href={"/"}>خانه</Link>
        <Link href={"/events"}>ایونت ها</Link>
      </div>

      {children}
    </div>
  );
};

export default DashboardLayout;
