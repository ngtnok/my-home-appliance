import { useEffect, useRef } from "react";
import DeleteButton from "./DeleteButton";

// function Form({ setList, setAlert, triggered }) {
function Form({ setView, selectedId, selectAppliance, setAlert }) {
  const inputUseAt = useRef();
  const inputMaker = useRef();
  const inputName = useRef();
  const inputBoxUseAt = <input type="text" ref={inputUseAt}></input>;
  const inputBoxMaker = <input type="text" ref={inputMaker}></input>;
  const inputBoxName = <input type="text" ref={inputName}></input>;

  useEffect(() => {
    if (selectedId) {
      fetch(`/api/appliances/${selectedId}`)
        .then((res) => res.json())
        .then((data) => {
          const { use_at, maker, appliance_name } = data;
          inputUseAt.current.value = use_at;
          inputMaker.current.value = maker;
          inputName.current.value = appliance_name;
        });
    }
  }, [selectedId]);

  const clickButton = () => {
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
        }),
      }).then((res) => {
        // if (res.status === 400) {
        //   setAlert("もう登録されてる家電だよ");
        // } else {
        setView("CollectByUseAt");
        selectAppliance("");
        inputUseAt.current.value = "";
        inputMaker.current.value = "";
        inputName.current.value = "";
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
        }),
      }).then((res) => {
        if (res.status === 400) {
          setAlert("もう登録されてる家電だよ");
        } else {
          setView("CollectByUseAt");
          selectAppliance("");
          inputUseAt.current.value = "";
          inputMaker.current.value = "";
          inputName.current.value = "";
        }
      });
    }
    //! response結果に応じて画面処理
    //! 登録完了したらselectedをリセットする

    // if (inputName.current.value) {
    // setAlert("");
    // console.log("inputName.current.value: ", inputName.current.value);
    // fetch("/api/appliances", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     use_at: inputUseAt.current.value,
    //     maker: inputMaker.current.value,
    //     appliance_name: inputName.current.value,
    //   }),
    // }).then((res) => {
    //   if (res.status === 400) {
    //     setAlert("もう登録されてる家電だよ");
    //   } else {
    //     setView("CollectByUseAt");
    //     // triggered((prev) => prev + 1);
    //     inputUseAt.current.value = "";
    //     inputMaker.current.value = "";
    //     inputName.current.value = "";
    //   }
    // });
    // setAlert("");
    // } else {
    //   setAlert("家電の名前は入力必須だよ");
    // }
  };
  // const handleKeyDown = (event) => {
  // ひらがな確定のとき、登録実行の挙動しちゃうので、保留
  // if (event.key === "Enter" && !event.isComposing) clickButton();
  // };
  return (
    <>
      <label>使ってるところ</label>
      {inputBoxUseAt}
      {/* <input type="text" ref={inputUseAt}></input> */}
      <label>メーカー</label>
      {inputBoxMaker}
      {/* <input type="text" ref={inputMaker}></input> */}
      <label>家電の名前</label>
      {inputBoxName}
      {/* <input type="text" ref={inputName} onKeyDown={handleKeyDown}></input> */}
      <button onClick={clickButton}>登録する</button>
      {/* {selectedId} */}
      {selectedId && <DeleteButton selectedId={selectedId} setView={setView} />}
    </>
  );
}

export default Form;
