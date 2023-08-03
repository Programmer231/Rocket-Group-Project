import Link from "next/link";
import { useEffect } from "react";

const Navbar = (props: any) => {
  useEffect(() => {
    const fetchEvents = async () => {
      const resData = await fetch(
        "https://api.planetearthlawncare.org/api/user/getUser",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await resData.json();

      console.log(data);
    };

    fetchEvents();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "grey",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        {
          <div>
            <Link
              href="/login"
              style={{
                fontSize: "2rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Login
            </Link>
            <Link
              href="/register"
              style={{
                fontSize: "2rem",
                textDecoration: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Register
            </Link>
          </div>
        }
        <Link
          href="/"
          style={{
            fontSize: "4rem",
            fontFamily: "mainFont",
            textDecoration: "none",
            padding: "2rem",
          }}
        >
          Event Scheduler
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: "10px",
        }}
      >
        <Link
          href="/create/event"
          style={{
            fontSize: "2rem",
            textDecoration: "none",
            color: "black",
          }}
        >
          Create Event
        </Link>
        <Link
          href="/Events"
          style={{
            fontSize: "2rem",
            textDecoration: "none",
            color: "black",
          }}
        >
          View Events by User
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
