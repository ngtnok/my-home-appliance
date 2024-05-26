import { useRef } from "react";

// function Form({ setList, setAlert, triggered }) {
function Form({ setAlert, selectedAppliance, setView }) {
  const inputUseAt = useRef();
  const inputMaker = useRef();
  const inputName = useRef();

  if (selectedAppliance) {
    // インプットボックスの初期値を設定
    //! 登録完了したらselectedをリセットする
    // fetch();
    inputUseAt.current.value = ""; //!選択された家電の情報
    inputMaker.current.value = "";
    inputName.current.value = "";
  }

  const clickButton = () => {
    //! 必須項目が入力されているかチェック
    if (!inputName.current.value) {
      return setAlert("家電の名前は入力必須だよ");
    }
    setAlert("");
    //! PUTかPOSTか判別

    if (selectedAppliance) {
      //! PUT
    }
    //! response結果に応じて画面処理

    if (inputName.current.value) {
      // setAlert("");
      // console.log("inputName.current.value: ", inputName.current.value);
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
          // triggered((prev) => prev + 1);
          inputUseAt.current.value = "";
          inputMaker.current.value = "";
          inputName.current.value = "";
        }
      });
      setAlert("");
    } else {
      setAlert("家電の名前は入力必須だよ");
    }
  };
  const handleKeyDown = (event) => {
    // ひらがな確定のとき、登録実行の挙動しちゃうので、保留
    // if (event.key === "Enter" && !event.isComposing) clickButton();
  };
  return (
    <>
      <label>使ってるところ</label>
      <input type="text" ref={inputUseAt}></input>
      <label>メーカー</label>
      <input type="text" ref={inputMaker}></input>
      <label>家電の名前</label>
      <input type="text" ref={inputName} onKeyDown={handleKeyDown}></input>
      <button onClick={clickButton}>登録する</button>
    </>
  );
}

export default Form;
