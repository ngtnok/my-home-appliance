import { useState } from "react";

import Form from "./Form";
import Alert from "./Alert";
import Cancel from "./Cancel";

function EditForm({ setView, selectedAppliance, selectAppliance }) {
  const [alertMessage, setAlert] = useState();
  return (
    <>
      <Form
        setView={setView}
        selectedAppliance={selectedAppliance}
        setAlert={setAlert}
      />
      <Cancel setView={setView} selectAppliance={selectAppliance} />
      <Alert alertMessage={alertMessage} />
    </>
  );
}
export default EditForm;
