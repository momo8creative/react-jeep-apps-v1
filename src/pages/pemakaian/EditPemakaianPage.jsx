import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormPemakaian from "../../components/form-pemakaian/FormPemakaian";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SHeading } from "../../styles/SHeading";

const EditPemakaianPage = () => {
  const params = useParams();
  const { pemakaianApi, pemakaianById } = usePemakaianContext();
  const navigation = useNavigate();

  const handleSubmit = (values) => {
    console.log("Submitted edit ->", values);
    pemakaianApi.update("PEMAKAIAN", values, () =>
      navigation(`/pemakaian/detail/${values._id}`)
    );
  };

  useEffect(() => {
    pemakaianApi.getById("PEMAKAIAN", { _id: params._id });
  }, []);

  return (
    <>
      <SHeading>Edit Pemakaian</SHeading>

      {pemakaianById && (
        <FormPemakaian data={pemakaianById} onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default EditPemakaianPage;
