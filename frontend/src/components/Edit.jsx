function Edit({ list }) {
  return (
    <ul>
      {list.map((obj, index) => (
        <li key={index}>
          {obj.appliance_name}
          <button>お疲れ様ぽい</button>
        </li>
      ))}
    </ul>
  );
}
export default Edit;
