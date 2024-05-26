import { useEffect, useState } from "react";

import Container from "./Container";
import Appliance from "./Appliance";

import uniq from "uniq";
// import { select } from "../../../src/knex";

function CollectByUseAt({ setView, selectAppliance }) {
  // const [triggerListReload, triggered] = useState(0);
  const [list, setList] = useState([]);
  const places = uniq(list.map((obj) => obj.use_at));

  useEffect(() => {
    fetch("/api/appliances")
      .then((res) => res.json())
      .then((data) => setList(data));
    // }, [triggerListReload]);
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
                // appliance_id={obj.id}
                // triggered={triggered}
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
