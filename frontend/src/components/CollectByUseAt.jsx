import Container from "./Container";
import Appliance from "./Appliance";

import uniq from "uniq";

function CollectByUseAt({ list }) {
  const places = uniq(list.map((obj) => obj.use_at));
  const trashButton = (event) => {
    console.log(event);
  };
  return (
    <>
      {places.map((place) => {
        const filterUniqPlace = list.filter((obj) => obj.use_at === place);
        return (
          <Container key={place} use_at={place}>
            {filterUniqPlace.map((obj) => (
              <Appliance
                key={obj.appliance_name}
                {...obj}
                appliance_id={obj.id}
              />
            ))}
          </Container>
        );
      })}
    </>
    // <ul>
    //   {list.map((obj, index) => (
    //     <li key={index}>
    //       {obj.use_at}
    //       {obj.maker}
    //       {obj.appliance_name}
    //       <button onClick={trashButton}>お疲れ様ぽい</button>
    //     </li>
    //   ))}
    // </ul>
  );
}
export default CollectByUseAt;
