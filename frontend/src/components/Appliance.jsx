import moment from "moment";

import EditButton from "./EditButton";

import "./Appliance.css";
// moment.locale("ja");
function Appliance({
  id,
  maker,
  appliance_name,
  purchase_date_type_date,
  warranty_period,
  setView,
  selectAppliance,
}) {
  // const datePurchase = Date(purchase_date_type_date); //).fromNow();
  // console.log("purchase_date_type_date: ", purchase_date_type_date);
  const datePurchase = moment(purchase_date_type_date).fromNow().split(" ");
  const [num, yearOrMonthOrDay] = datePurchase;
  const classAlert =
    (num >= 10 && yearOrMonthOrDay === "years" && "alert_service_life") || "";
  return (
    <div className={classAlert}>
      <EditButton id={id} setView={setView} selectAppliance={selectAppliance} />
      {/* {id} */}
      {maker}
      {appliance_name}
      {!!classAlert && `購入から${num}年経過しています`}
      {warranty_period && `保証期間${warranty_period}年`}
    </div>
  );
}
export default Appliance;
