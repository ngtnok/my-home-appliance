import moment from "moment";

import EditButton from "./EditButton";

import "./Appliance.css";

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
  const elapsed = moment(purchase_date_type_date).fromNow().split(" ");
  const [num, yearOrMonthOrDay] = elapsed;
  const classAlert =
    (num >= 10 && yearOrMonthOrDay === "years" && "alert_service_life") || "";
  return (
    <table>
      <tbody>
        <tr className={classAlert}>
          <td>
            <EditButton
              id={id}
              setView={setView}
              selectAppliance={selectAppliance}
            />
          </td>
          <td className="maker">{maker}</td>
          <td className="name">{appliance_name}</td>
          <td className="warranty">
            {warranty_period && `保証期間${warranty_period}年`}
          </td>
          <td className="alertMessage">
            {!!classAlert && `購入から${num}年経過しています`}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Appliance;
