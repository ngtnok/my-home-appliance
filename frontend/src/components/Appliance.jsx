import EditButton from "./EditButton";

function Appliance({
  appliance_id,
  maker,
  appliance_name,
  // triggered,
  setView,
  selectAppliance,
}) {
  // const clickTrash = async () => {
  //   await fetch("/api/appliances", {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id: appliance_id, appliance_name }),
  //   });
  //   triggered((prev) => prev + 1);
  // };
  return (
    <div>
      <EditButton
        appliance_id={appliance_id}
        setView={setView}
        selectAppliance={selectAppliance}
      />
      {appliance_id}
      {maker}
      {appliance_name}
      {/* <button onClick={clickTrash}>お疲れぽん</button> */}
    </div>
  );
}
export default Appliance;
