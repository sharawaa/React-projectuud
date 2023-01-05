import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function All(props) {
  return (
    <div>
      <Card style={{ width: "600px" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
