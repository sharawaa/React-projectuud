export default function All(props) {
  return (
    <div>
      <section style={{ padding: "20px" }}>
        <div className="card" style={{ width: "590px", height: "618px" }}>
          <img
            className=""
            style={{ height: "415px", width: "590px" }}
            variant="top"
            src={props.image}
          />
          <h6 className="card-title">JAN 06 2023</h6>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href="#">READ MORE</a>
        </div>
      </section>
    </div>
  );
}
