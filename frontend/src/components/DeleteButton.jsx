function DeleteButton({ selectedId, setView }) {
  const clickDelete = () => {
    fetch("/api/appliances", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selectedId }),
    });
    setView("CollectByUseAt");
    // selectedId;
  };
  return <button onClick={clickDelete}>お疲れポイ</button>;
}
export default DeleteButton;
