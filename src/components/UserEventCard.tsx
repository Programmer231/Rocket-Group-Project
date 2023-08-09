const EventCard = (props: any) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <div style={{ width: "400px" }}>
        <img src={props.image} style={{ maxWidth: "200px" }} />
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{props.name}</h1>

        <div style={{ fontSize: "16px" }}>{props.description}</div>
        <div>{props.address}</div>
      </div>
    </div>
  );
};

export default EventCard;
