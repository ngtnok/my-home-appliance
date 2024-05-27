import { useEffect, useRef } from "react";
import DeleteButton from "./DeleteButton";
import "./Form.css";

// function Form({ setList, setAlert, triggered }) {
function Form({ setView, selectedId, selectAppliance, setAlert }) {
  const inputUseAt = useRef();
  const inputMaker = useRef();
  const inputName = useRef();
  const inputPurchaseDate = useRef();
  const inputWarrantyPeriod = useRef();
  const [inputBoxUseAt, inputBoxMaker, inputBoxName] = [
    inputUseAt,
    inputMaker,
    inputName,
  ].map((refName, i) => <input type="text" key={i} ref={refName} />);
  const inputBoxPurchaseDate = (
    <input
      type="date"
      min="1988-11-11"
      max="2100-12-31"
      ref={inputPurchaseDate}
    />
  );
  const inputBoxWarrantyPeriod = (
    <input type="number" min="0" max="100" ref={inputWarrantyPeriod} />
  );

  useEffect(() => {
    if (selectedId) {
      fetch(`/api/appliances/${selectedId}`)
        .then((res) => res.json())
        .then((data) => {
          const {
            use_at,
            maker,
            appliance_name,
            purchase_date_type_date,
            warranty_period,
          } = data;
          console.log("purchase_date_type_date: ", purchase_date_type_date);
          console.log("warranty_period: ", warranty_period);
          inputUseAt.current.value = use_at;
          inputMaker.current.value = maker;
          inputName.current.value = appliance_name;
          inputPurchaseDate.current.value =
            purchase_date_type_date && purchase_date_type_date.split("T")[0];
          inputWarrantyPeriod.current.value =
            warranty_period && Number(warranty_period);
        });
    }
  }, [selectedId]);

  const clickButton = () => {
    console.log("inputPurchase", inputPurchaseDate.current.value);
    //! 必須項目が入力されているかチェック
    if (!inputName.current.value) {
      return setAlert("家電の名前は入力必須だよ");
    }
    setAlert("");
    //! PATCHかPOSTか判別
    if (selectedId) {
      //! PATCH
      fetch("/api/appliances", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedId,
          use_at: inputUseAt.current.value,
          maker: inputMaker.current.value,
          appliance_name: inputName.current.value,
          purchase_date_type_date: new Date(inputPurchaseDate.current.value),
          // "yyyy-MM-dd"
          // // { locale: ja }
          // ),
          warranty_period: inputWarrantyPeriod.current.value,
        }),
      }).then((res) => {
        setView("CollectByUseAt");
        selectAppliance("");
        // inputUseAt.current.value = "";
        // inputMaker.current.value = "";
        // inputName.current.value = "";
        // }
      });
    } else {
      //! POST
      fetch("/api/appliances", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          use_at: inputUseAt.current.value,
          maker: inputMaker.current.value,
          appliance_name: inputName.current.value,
          purchase_date_type_date: new Date(inputPurchaseDate.current.value),
          warranty_period: String(inputWarrantyPeriod.current.value),
        }),
      }).then((res) => {
        if (res.status === 400) {
          setAlert("もう登録されてる家電だよ");
        } else {
          setView("CollectByUseAt");
          selectAppliance("");
          // inputUseAt.current.value = "";
          // inputMaker.current.value = "";
          // inputName.current.value = "";
        }
      });
    }
  };
  return (
    <div className="form">
      <label>使ってるところ</label>
      {inputBoxUseAt}
      <label>メーカー</label>
      {inputBoxMaker}
      <label>家電の名前</label>
      {inputBoxName}
      <label>購入日</label>
      {inputBoxPurchaseDate}
      <label>保証期間(年)</label>
      {inputBoxWarrantyPeriod}
      <input type="button" onClick={clickButton} value="追加／更新" />
      {selectedId && <DeleteButton selectedId={selectedId} setView={setView} />}
    </div>
  );
}

export default Form;
