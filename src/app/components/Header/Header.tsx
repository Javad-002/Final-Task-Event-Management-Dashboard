import Link from "next/link";
import { cookies } from "next/headers";

const Header = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return (
    <header className="bg-[#2A2A2A] w-full p-5 flex justify-center text-xl">
      <Link
        className="text-[#03DAC6] hover:text-[#00C4B3] hover:translate-y-[2px] transition-all px-4 rounded-2xl"
        href={"/"}
      >
        خانه
      </Link>

      {token ? (    
        <Link
          className="text-[#03DAC6] hover:text-[#00C4B3] hover:translate-y-[2px] transition-all px-4 rounded-2xl"
          href={"/dashboard"}
        >
          داشبورد
        </Link>
        
      ) : (
        <Link
          className="text-[#03DAC6] hover:text-[#00C4B3] hover:translate-y-[2px] transition-all px-4 rounded-2xl"
          href={"/login"}
        >
          ورود
        </Link>
      )}
    </header>
  );
};

export { Header };
