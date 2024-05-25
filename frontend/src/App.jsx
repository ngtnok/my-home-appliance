import { useEffect, useState } from "react";
import Form from "./components/Form";
import Alert from "./components/Alert";
import CollectByUseAt from "./components/CollectByUseAt";
// import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [alertMessage, setAlert] = useState();
  useEffect(() => {
    // fetch("http://localhost:3000/api/appliances")
    fetch("/api/appliances")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  return (
    <>
      <Form setList={setList} setAlert={setAlert} />
      <Alert alertMessage={alertMessage} />
      <CollectByUseAt list={list} />
    </>
  );
}

export default App;
