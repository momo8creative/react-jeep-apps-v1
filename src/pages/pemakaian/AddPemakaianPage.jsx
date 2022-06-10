import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import FormPemakaian from "../../components/form-pemakaian/FormPemakaian";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SHeading } from "../../styles/SHeading";

const AddPemakaianPage = ({ dataForm }) => {
  const { pemakaianApi, lastPemakaian } = usePemakaianContext();
  const navigation = useNavigate();

  const handleSubmit = (values) => {
    console.log("Submitted add ->", values);
    pemakaianApi.post("PEMAKAIAN", values, () => {
      navigation(`/pemakaian/detail/${values._id}`);
    });
  };

  useLayoutEffect(() => {
    if (!lastPemakaian) pemakaianApi.getLast("PEMAKAIAN");
  }, []);

  return (
    <>
      <SHeading>Tambah Pemakaian</SHeading>

      {lastPemakaian && (
        <FormPemakaian
          data={{ ...dataForm, km_awal: lastPemakaian.km_akhir }}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default AddPemakaianPage;

AddPemakaianPage.defaultProps = {
  dataForm: {
    no_spj: "",
    tgl_berangkat: "",
    jam_berangkat: "",
    tgl_kembali: "",
    jam_kembali: "",
    tujuan: "",
    keperluan: "",
    km_awal: "",
    km_akhir: "",
    km_pemakaian: "",
  },
};
