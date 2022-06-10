import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPemakaian from "../../components/detail-pemakaian/DetailPemakaian";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SHeading } from "../../styles/SHeading";

// const dt = {
//   _id: "e1ec458e-2408-4bca-9988-4aad6f46e6b1",
//   no_spj: "",
//   tgl_berangkat: "2022-06-08T17:00:00.000Z",
//   jam_berangkat: "1899-12-30T01:17:56.000Z",
//   tgl_kembali: "2022-06-08T17:00:00.000Z",
//   jam_kembali: "1899-12-30T07:17:56.000Z",
//   tujuan: "Malang",
//   keperluan: "Antar pak askep  humas",
//   km_awal: 517273,
//   km_akhir: 517386,
//   km_pemakaian: 113,
//   created_by: "Santoso",
//   created_on: "2022-06-09T13:13:13.552Z",
//   updated_by: "",
//   updated_on: "",
// };

const DetailPemakaianPage = () => {
  const { pemakaianById, pemakaianApi } = usePemakaianContext();
  const params = useParams();

  useEffect(() => {
    pemakaianApi.getById("PEMAKAIAN", { _id: params._id });
  }, []);

  return (
    <>
      <SHeading>Detail Pemakaian</SHeading>
      {pemakaianById ? <DetailPemakaian data={pemakaianById} /> : "Loading..."}
    </>
  );
};

export default DetailPemakaianPage;
