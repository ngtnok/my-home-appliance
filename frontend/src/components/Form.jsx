import { useRef } from "react";

function Form({ setList, setAlert }) {
  const inputBox = useRef();
  const clickButton = () => {
    setAlert("");
    if (inputBox.current.value) {
      console.log("inputBox.current.value: ", inputBox.current.value);
      fetch("/api/appliances", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: "hogeC",
          maker: "hogeM",
          appliance_name: inputBox.current.value,
        }),
      }).then((res) => {
        if (res.status === 400) {
          setAlert("もう登録されてる家電だよ");
        } else {
          inputBox.current.value = "";
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
      <label>家電の名前</label>
      <input type="text" ref={inputBox} onKeyDown={handleKeyDown}></input>
      <button onClick={clickButton}>登録する</button>
    </>
  );
}

export default Form;
