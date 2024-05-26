function Cancel({ setView, selectAppliance }) {
  const cancelButton = () => {
    selectAppliance("");
    setView("CollectByUseAt");
  };
  return <button onClick={cancelButton}>編集をやめる</button>;
}
export default Cancel;
