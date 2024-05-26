import { useEffect, useState } from "react";
import Form from "./components/Form";
import Alert from "./components/Alert";
import CollectByUseAt from "./components/CollectByUseAt";
// import Appliance from "./components/Appliance";
// import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [alertMessage, setAlert] = useState();
  const [triggerListReload, triggered] = useState(0);
  useEffect(() => {
    fetch("/api/appliances")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, [triggerListReload]);
  return (
    <>
      <Form setList={setList} setAlert={setAlert} triggered={triggered} />
      <Alert alertMessage={alertMessage} />
      <CollectByUseAt list={list} triggered={triggered} />
    </>
  );
}

export default App;
