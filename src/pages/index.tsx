import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import classes from "../components/css/grid.module.css";

export default function Home() {
  const [allEvents, setAllEvents] = useState([]);

  const fetchEvents = useCallback(async () => {
    const resData = await fetch(
      "https://event.planetearthlawncare.org/api/event/getEvents",
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await resData.json();

    console.log(data);

    setAllEvents(data.events);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEventClicked = async (eventId: string) => {
    await fetch(
      `https://event.planetearthlawncare.org/api/event/addEvent/${eventId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    fetchEvents();
  };

  return (
    <>
      <Head>
        <title>Event Scheduler</title>
      </Head>
      <main>
        <div>
          <Navbar />
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 w-[90%] gap-[50px] mx-auto my-[50px] ">
            {
              // We have an array of objects of events. The .map() function takes a callback function which feeds us a default parameter that accepts every item in an array 1 by 1.
              // In our case, these items are Javascript objects. We need to get the values from the keys of this javascript object and pass them to the html component so we can render data.
            }
            {allEvents.map((event: any) => {
              return (
                <EventCard
                  key={event._id}
                  id={event._id}
                  image={event.image}
                  description={event.description}
                  address={event.address}
                  name={event.name}
                  creator={event.creator}
                  handleEvent={handleEventClicked}
                  users={event.users}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
