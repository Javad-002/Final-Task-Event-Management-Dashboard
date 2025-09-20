import React from "react";
import { IEvent } from "../core/types/Ievent";
import { EventCard } from "../components/EventCard/EventCard";

const page = async () => {
  const getEvents = async (): Promise<IEvent[]> => {
    const res = await fetch(
      "https://68acab60b996fea1c08a9849.mockapi.io/api/v1/events"
    );
    if (!res.ok) {
      throw new Error("دریافت ایونت‌ها با مشکل موجه شد");
    }
    return res.json();
  };

  const events = await getEvents();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">ایونت ها</h1>
      <div className="w-full border-t border-[#2E2E2E] flex flex-wrap gap-5 p-5">
        {events.map((value) => (
          <EventCard key={value.id} value={value}/>
        ))}
      </div>
    </div>
  );
};

export default page;
