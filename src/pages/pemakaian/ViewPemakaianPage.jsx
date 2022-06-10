import { useEffect } from "react";
import FilterPemakaian from "../../components/filter-pemakaian/FilterPemakaian";
import ListPemakaian from "../../components/list-pemakaian/ListPemakaian";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SHeading } from "../../styles/SHeading";

const ViewPemakaianPage = () => {
  const { pemakaianApi, filterPemakaian, pemakaians } = usePemakaianContext();

  useEffect(() => {
    if (!filterPemakaian || Object.keys(filterPemakaian).length == 0) return;
    pemakaianApi.get("PEMAKAIAN", filterPemakaian);
  }, [filterPemakaian]);

  return (
    <>
      <SHeading>Daftar Pemakaian</SHeading>

      <FilterPemakaian />

      {pemakaians ? <ListPemakaian /> : "Loading..."}
    </>
  );
};

export default ViewPemakaianPage;
