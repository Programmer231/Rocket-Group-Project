import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const resData = await fetch(
        "https://api.planetearthlawncare.org/api/event/getEvents",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await resData.json();

      console.log(data);

      setAllEvents(data.events);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Event Scheduler</title>
      </Head>
      <main>
        <div className="bg-red-500">
          <Navbar />
          {allEvents.map((event: any) => {
            return <h1 key={event._id}>{event.name}</h1>;
          })}
        </div>
      </main>
    </>
  );
}
