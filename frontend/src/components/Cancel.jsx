function Cancel({ setView, selectAppliance }) {
  const cancelButton = () => {
    selectAppliance("");
    setView("CollectByUseAt");
  };
  return <input type="button" onClick={cancelButton} value="編集をやめる" />;
}
export default Cancel;
