import "../style/welcomePage.css";
import { useState } from "react";

export default function WelcomePage(prop) {
  const { setLogin } = prop;
  const { data } = prop;
  const { addUser } = prop;
  /*login hiiihdee hiij baigaa utga */
  const [userName1, setUserName] = useState("");
  const [password1, setPassword] = useState("");
  /* sign in hiihdee hiij baigaa utga */
  const [userName, setDataName] = useState("");
  const [password, setDataPass] = useState("");
  /* shineer orj irsen utguudaa hadgalaad dataruugaa shidej bainshde bro */
  function saveButton() {
    if (userName === "") {
      console.error("user name passwordoo oruulna uu");
    } else {
      addUser([...data, { userName, password }]);
    }
  }

  return (
    <div className="container">
      <input type="text"
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setLogin(userName1, password1)}>Log in </button>

      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Sign in
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Sign in
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  onChange={(e) => setDataName(e.target.value)}
                  type="text"
                  placeholder="User name"
                />

                <input
                  onChange={(e) => setDataPass(e.target.value)}
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={saveButton}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
