function Edit({ list }) {
  const trashButton = (event) => {
    console.log(event);
  };
  return (
    <ul>
      {list.map((obj, index) => (
        <li key={index}>
          {obj.use_at}
          {obj.maker}
          {obj.appliance_name}
          <button onClick={trashButton}>お疲れ様ぽい</button>
        </li>
      ))}
    </ul>
  );
}
export default Edit;
