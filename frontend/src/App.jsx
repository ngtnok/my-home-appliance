import { useState } from "react";
import EditForm from "./components/EditForm";
import CollectByUseAt from "./components/CollectByUseAt";

function App() {
  const [view, setView] = useState("CollectByUseAt");
  const [selectedId, selectAppliance] = useState();
  return (
    <>
      <h1>うちの家電</h1>
      {view === "CollectByUseAt" ? (
        <>
          <button onClick={() => setView("EditForm")}>＋</button>
          <CollectByUseAt setView={setView} selectAppliance={selectAppliance} />
        </>
      ) : (
        <EditForm
          setView={setView}
          selectedId={selectedId}
          selectAppliance={selectAppliance}
        />
      )}
    </>
  );
}

export default App;
