import { useEffect, useState } from "react";
import Form from "./components/Form";
import Alert from "./components/Alert";
// import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [alertMessage, setAlert] = useState();
  useEffect(() => {
    // fetch("http://localhost:3000/api/appliances")
    fetch("/api/appliances")
      .then((res) => res.json())
      .then((data) => setList(data));
  });
  return (
    <>
      <Form setList={setList} setAlert={setAlert} />
      <Alert alertMessage={alertMessage} />
      <ul>
        {list.map((obj, index) => (
          <li key={index}>{obj.appliance_name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
