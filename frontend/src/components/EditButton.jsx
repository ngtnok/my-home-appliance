function EditButton({ id, setView, selectAppliance }) {
  const clickEdit = () => {
    selectAppliance(id);
    // console.log("id: ", id);

    setView("EditForm");
  };
  return (
    <>
      <button onClick={clickEdit}>編集</button>
    </>
  );
}
export default EditButton;
