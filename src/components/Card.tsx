const Card = (props: any) => {
  return (
    <div
      style={{
        width: "300px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>{props.name}</div>
      <img src={props.image}></img>
      <div style={{ fontSize: "16px" }}>{props.description}</div>
      <div>{props.address}</div>
    </div>
  );
};

export default Card;
