import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import UserEventCard from "@/components/UserEventCard";
import { useEffect, useState } from "react";

const Events = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const data = await fetch(
        "https://api.planetearthlawncare.org/api/event/userEvents",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const userData = await data.json();
      setAllUsers(userData.users);

      console.log(userData);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div>
          {
            // We have an array of objects of events. The .map() function takes a callback function which feeds us a default parameter that accepts every
            // item in an array 1 by 1.
            // In our case, these items are Javascript objects. We need to get the values from the keys of this
            // javascript object and pass them to the html component so we can render data.
          }
          {allUsers.map((user: any) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "start",
                }}
                key={user._id}
              >
                <div style={{ padding: "30px" }}>
                  <h1>{user.username}</h1>
                  <img
                    src={user.image}
                    style={{ width: "300px" }}
                    alt="User Image"
                  ></img>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {user.events.map((event: any) => {
                    return (
                      <UserEventCard
                        key={event._id}
                        id={event._id}
                        image={event.image}
                        description={event.description}
                        address={event.address}
                        name={event.name}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Events;
