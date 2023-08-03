const Card = (props: any) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: "0 0" }}>
        <img src={props.image} />
        <div>
          <div style={{ fontSize: "24px", marginBottom: "10px" }}>
            {props.name}
          </div>

          <div style={{ fontSize: "16px" }}>{props.description}</div>
          <div>{props.address}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
