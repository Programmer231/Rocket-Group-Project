import Card from "@/components/Card";
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
        <div>
          <Navbar />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              margin: "50px auto",
              gap: "50px",
              width: "90%",
            }}
          >
            {allEvents.map((event: any) => {
              return (
                <Card
                  key={event._id}
                  image={event["image"]}
                  description={event.description}
                  address={event.address}
                  name={event.name}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
