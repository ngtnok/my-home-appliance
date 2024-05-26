function EditButton({ appliance_id, setView, selectAppliance }) {
  const clickEdit = () => {
    selectAppliance(appliance_id);
    setView("EditForm");
  };
  return (
    <>
      <button onClick={clickEdit}>編集</button>
    </>
  );
}
export default EditButton;
