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
  return <input type="button" onClick={clickDelete} value="今までありがとう" />;
}
export default DeleteButton;
