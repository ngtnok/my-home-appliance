import { useEffect, useState } from "react";

import Container from "./Container";
import Appliance from "./Appliance";

import uniq from "uniq";

function CollectByUseAt({ setView, selectAppliance }) {
  const [list, setList] = useState([]);
  const places = uniq(list.map((obj) => obj.use_at));

  useEffect(() => {
    fetch("/api/appliances")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <>
      {places.map((place) => {
        const filterUniqPlace = list.filter((obj) => obj.use_at === place);
        return (
          <Container key={place} use_at={place}>
            {filterUniqPlace.map((obj) => (
              <Appliance
                key={obj.id}
                {...obj}
                setView={setView}
                selectAppliance={selectAppliance}
              />
            ))}
          </Container>
        );
      })}
    </>
  );
}
export default CollectByUseAt;
