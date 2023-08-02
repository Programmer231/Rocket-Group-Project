import Link from "next/link";

const Navbar = () => {
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
