import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Navbar = (props: any) => {
  const [user, setUser] = useState<any>();

  const fetchEvents = useCallback(async () => {
    try {
      const resData = await fetch(
        "https://api.planetearthlawncare.org/api/user/getUser",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await resData.json();

      setUser(data.user);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLogoutClicked = async () => {
    await fetch("https://api.planetearthlawncare.org/api/user/logout", {
      method: "POST",
      credentials: "include",
    });
    fetchEvents();
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
                textDecoration: "none",
                color: "black",
              }}
            >
              Login
            </Link>
            <Link
              href="/register"
              style={{
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
            <div style={{}}>
              <img
                src={user.image}
                style={{ width: "100px", borderRadius: "50%", padding: "10px" }}
              ></img>
              <h1 style={{ textAlign: "center" }}>{user.username}</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <button onClick={handleLogoutClicked}>Logout</button>
              <Link href="/updateUser">Update User</Link>
            </div>
          </div>
        )}
        <Link
          href="/"
          style={{
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
            textDecoration: "none",
            color: "black",
          }}
        >
          Create Event
        </Link>
        <Link
          href="/Events"
          style={{
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
