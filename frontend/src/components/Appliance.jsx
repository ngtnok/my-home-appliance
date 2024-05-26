function Appliance({ maker, appliance_name, appliance_id, triggered }) {
  const clickTrash = async () => {
    await fetch("/api/appliances", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: appliance_id, appliance_name }),
    });
    triggered((prev) => prev + 1);
  };
  return (
    <div>
      {appliance_id}
      {maker}
      {appliance_name}
      <button onClick={clickTrash}>お疲れぽん</button>
    </div>
  );
}
export default Appliance;
