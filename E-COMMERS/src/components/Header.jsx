import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Header() {
  return (
    <div style={{ backgroundColor: "blue", height: "100px" }}>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src="logo 1 (1).png" alt="#" />
        <InputGroup className="mb-3" style={{ width: "500px" }}>
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
        <section>
          <img
            style={{ width: "30px" }}
            src="https://cdn-icons-png.flaticon.com/512/4466/4466332.png"
            alt=""
          />
          <Button variant="light">Sign in</Button>{" "}
          <Button variant="light">
            <img
              style={{ width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt=""
            />
          </Button>{" "}
        </section>
      </div>
    </div>
  );
}
