import { useState } from "react";
import EditForm from "./components/EditForm";
// import Form from "./components/Form";
// import Alert from "./components/Alert";
import CollectByUseAt from "./components/CollectByUseAt";
// import Appliance from "./components/Appliance";
// import "./App.css";

function App() {
  const [view, setView] = useState("CollectByUseAt");
  // const [list, setList] = useState([]);
  // const [alertMessage, setAlert] = useState();
  // const [triggerListReload, triggered] = useState(0);
  const [selectedAppliance, selectAppliance] = useState();
  // useEffect(() => {
  //   fetch("/api/appliances")
  //     .then((res) => res.json())
  //     .then((data) => setList(data));
  // }, [triggerListReload]);
  return (
    <>
      <h1>うちの家電</h1>
      {/* {view} */}
      {view === "CollectByUseAt" ? (
        <>
          <button onClick={() => setView("EditForm")}>＋</button>
          <CollectByUseAt setView={setView} selectAppliance={selectAppliance} />
        </>
      ) : (
        <EditForm
          setView={setView}
          selectedAppliance={selectedAppliance}
          selectAppliance={selectAppliance}
        />
      )}
      {/* <Form setList={setList} setAlert={setAlert} triggered={triggered} />
      <Alert alertMessage={alertMessage} /> */}
      {/* <CollectByUseAt list={list} triggered={triggered} /> */}
    </>
  );
}

export default App;
