const EventCard = (props: any) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img src={props.image} />
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{props.name}</h1>

        <div style={{ fontSize: "16px" }}>{props.description}</div>
        <div>{props.address}</div>
      </div>

      <div style={{ width: "100%", marginTop: "50px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Created by: {props.creator.username}
        </h1>
        <p>Address: {props.creator.address}</p>
        <button
          style={{
            borderBottom: "10px double #ff6550",
            textAlign: "center",
            marginTop: "50px",
            width: "50%",
          }}
          onClick={() => props.handleEvent(props.id)}
        >
          I WANT TO GO
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {props.users.map((user: any, index: number) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={user.image}
                  style={{ width: "80px", display: "inline" }}
                />
                <h1>{user.username}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
