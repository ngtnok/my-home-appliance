// import Appliance from "./Appliance";

function Container({ use_at, children }) {
  return (
    <>
      <h3>{use_at}</h3>
      {children}
    </>
  );
}
export default Container;
