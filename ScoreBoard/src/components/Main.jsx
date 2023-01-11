import "../style/main.css";
import Modal from "./sub-components/Modal";
import Users from "./sub-components/Users";
export default function Main(prop) {
  const { setIsloggedIn } = prop;
  const data = [
    { name: "Suldee", score: 10 },
    { name: "Bataa", score: 8 },
    { name: "Suhee", score: 12 },
    { name: "Sharva", score: 15 },
  ];
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((unit, index) => {
          return (
            <Users name={unit.name} score={unit.score} index={index + 1} />
          );
        })}
      </tbody>
      <div>
        <Modal />
      </div>
      <button
        onClick={() => setIsloggedIn(false)}
        type="button"
        class="btn btn-success"
      >
        Log out
      </button>
    </table>
  );
}
