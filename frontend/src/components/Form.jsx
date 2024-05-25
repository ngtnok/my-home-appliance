import { useRef } from "react";

function Form({ setList, setAlert }) {
  const inputCategory = useRef();
  const inputMaker = useRef();
  const inputName = useRef();
  const clickButton = () => {
    setAlert("");
    if (inputName.current.value) {
      console.log("inputName.current.value: ", inputName.current.value);
      fetch("/api/appliances", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: inputCategory.current.value,
          maker: inputMaker.current.value,
          appliance_name: inputName.current.value,
        }),
      }).then((res) => {
        if (res.status === 400) {
          setAlert("もう登録されてる家電だよ");
        } else {
          inputCategory.current.value = "";
          inputMaker.current.value = "";
          inputName.current.value = "";
        }
      });
    }
  };
  const handleKeyDown = (event) => {
    // ひらがな確定のとき、登録実行の挙動しちゃうので、保留
    // if (event.key === "Enter" && !event.isComposing) clickButton();
  };
  return (
    <>
      <label>使ってるところ</label>
      <input type="text" ref={inputCategory}></input>
      <label>メーカー</label>
      <input type="text" ref={inputMaker}></input>
      <label>家電の名前</label>
      <input type="text" ref={inputName} onKeyDown={handleKeyDown}></input>
      <button onClick={clickButton}>登録する</button>
    </>
  );
}

export default Form;
