import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = (props: any) => {
  const [user, setUser] = useState<any>();

  const [loggedIn, setLoggedIn] = useState(false);

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

      setUser(data.user);

      console.log(data.user);
    };

    fetchEvents();
    setLoggedIn(true);
  }, [loggedIn]);

  const handleLogoutClicked = async () => {
    await fetch("https://api.planetearthlawncare.org/api/user/logout", {
      method: "POST",
      credentials: "include",
    });

    setLoggedIn(false);
  };

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
        {!user ? (
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
        ) : (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <div>
              <img src={user.image}></img>
              <h1>{user.username}</h1>
            </div>
            <button onClick={handleLogoutClicked}>Logout</button>
          </div>
        )}
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
