import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function All(props) {
  return (
    <div>
      <section style={{padding:"20px" }}>
        <Card style={{ width: "590px", height:"618px"}}>
          <Card.Img style={{height: "415px", width: "590px"}} variant="top" src={props.image} />
          <Card.Body>
            <h6>JAN 06 2023</h6>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="primary">READ MORE</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}
