import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SFilter } from "./Styles";

const FilterPemakaian = () => {
  const { filterPemakaian: filter, setFilterPemakaian: setFilter } =
    usePemakaianContext();

  return (
    <SFilter>
      <h3>Filter</h3>
      {filter &&
        Object.keys(filter).map((f, i) => (
          <div key={i}>
            {f} {filter[f]}
          </div>
        ))}
    </SFilter>
  );
};

export default FilterPemakaian;
