import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [graduated, setgraduated] = useState(false);
  const [gender, setgender] = useState("male");
  const [option, setoption] = useState();
  const [decp, setdecp] = useState();

  const submitHanler = (e) => {
    e.preventDefault();
    console.log(username, graduated, gender, option, decp);
  };

  return (
    <>
      <form onSubmit={submitHanler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          value={username}
        />{" "}
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setgraduated(e.target.checked)}
          checked={graduated}
        />
        Gradated <br />
        <br />
        <input
          type="radio"
          name="gender"
          defaultValue="male"
          onChange={(e) => setgender(e.target.value)}
          checked={gender === "male" ? true : false}
        />
        male
        <input
          type="radio"
          name="gender"
          defaultValue="female"
          onChange={(e) => setgender(e.target.value)}
          checked={gender === "female" ? true : false}
        />
        female
        <br />
        <br />
        <select value={option} onChange={(e) => setoption(e.target.value)}>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
        </select>
        <br />
        <br />
        <textarea
          value={decp}
          onChange={(e) => setdecp(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
