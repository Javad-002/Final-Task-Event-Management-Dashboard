
import { IEvent } from "@/core/types/Ievent";
import Image from "next/image";
import { FC } from "react";

interface IProp {
  value: IEvent;
}

const EventCard: FC<IProp> = ({value}) => {
  return (
    <div className="bg-[#1E1E1E] w-fit p-5 hover:translate-y-[-6px] shadow-md hover:shadow-[0_0_25px_2px_rgba(139,92,246,0.15)] hover:scale-103 transition-all hover:cursor-pointer flex flex-nowrap rounded-2xl">
      <Image src={value.imageAddress} alt={`${value.title} Photo`} width={200} height={200}/>
      <div className="w-80 flex flex-col p-2">
      <h5>Title: {value.title}</h5>
      <p className="text-[#B0B0B0]">Description: {value.description}</p>
      </div>

    </div>
  );
};

export { EventCard };
