import { IEvent } from "@/app/core/types/Ievent";
import Image from "next/image";
import { FC } from "react";

interface IProp {
  value: IEvent;
}

const EventCard: FC<IProp> = ({value}) => {
  return (
    <div className="bg-[#1E1E1E] w-fit p-5">
      <Image src={value.imageAddress} alt={`${value.title} Photo`} width={200} height={200}/>
      <h5>Title: {value.title}</h5>
      <p className="text-[#B0B0B0]">Description: {value.description}</p>
    </div>
  );
};

export { EventCard };
