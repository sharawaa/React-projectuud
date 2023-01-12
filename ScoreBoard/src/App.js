import { useState } from "react";
import Main from "./components/Main";
import WelcomePage from "./components/WelcomePage";

function App() {
  /* */
  const [isLoggedIn, setIsloggedIn] = useState(false);
  /* */
  const [addUser, setAddUser] = useState(data);

  function loginHandler(userName, password) {
    console.log("loginHandler is running");
    console.log("userName:", userName);
    console.log("password:", password);
    addUser.map((user) => {
      if (userName === user.userName && password === user.password) {
        setIsloggedIn(true);
      } else {
        console.error("wrong password or username!");
      }
    });
  }

  return (
    
      <div>
        {isLoggedIn ? (
          <Main setIsloggedIn={setIsloggedIn} />
        ) : (
          <WelcomePage
            /* end bol yrunhiiduu  */
            addUser={setAddUser}
            data={data}
            setLogin={loginHandler}
          />
        )}
      </div>
   
  );
}
const data = [
  {
    userName: "bataa",
    password: "zxc",
  },
  {
    userName: "suhee",
    password: "iop",
  },
  {
    userName: "suldee",
    password: "qwe",
  },
];

export default App;
