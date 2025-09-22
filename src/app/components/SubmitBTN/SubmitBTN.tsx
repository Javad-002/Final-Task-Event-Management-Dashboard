"use client";

import { useFormStatus } from "react-dom";

const SubmitBTN = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-[#BB86FC] px-5 py-2 text-2xl rounded-2xl shadow-[#1E1E1E] hover:cursor-pointer hover:bg-[#CF9BFF] hover:text-[#F8F8F8] disabled:opacity-60 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending? "درحال ورود" : "ورود"}
    </button>
  );
};

export {SubmitBTN};
