import DataFieldFormPemakaian from "../../datas/DataFieldFormPemakaian";
import { SLinkButton } from "../../styles/SLinkButton";
import {
  formatDateToForm,
  formatTimeToForm,
  getDateTimeAgo,
} from "../../utils/DateTime";
import Button from "../button/Button";
import { SContainer, SContent, SFooter, SRow } from "./Styles";

const DetailPemakaian = ({ data }) => {
  const { formField } = DataFieldFormPemakaian({});
  data["tgl_berangkat"] = formatDateToForm(data["tgl_berangkat"]);
  data["tgl_kembali"] = formatDateToForm(data["tgl_kembali"]);
  data["jam_berangkat"] = formatTimeToForm(data["jam_berangkat"]);
  data["jam_kembali"] = formatTimeToForm(data["jam_kembali"]);

  return (
    <>
      <SContainer>
        <div>
          {data.created_by}, {getDateTimeAgo(data.created_on)} lalu
        </div>
      </SContainer>

      <SContainer>
        <SContent>
          {formField.map(({ title, list, label, name }, i) => (
            <SRow key={i}>
              {title ? (
                <SRow>
                  <h5>{title}</h5>
                  {list.map(({ label, name }, i) => (
                    <div key={i}>
                      <div>{label}</div>
                      <h4>{data[name]}</h4>
                    </div>
                  ))}
                </SRow>
              ) : (
                <div>
                  <div>{label}</div>
                  <h4>{data[name]}</h4>
                </div>
              )}
            </SRow>
          ))}

          <SFooter>
            <SLinkButton to={`../edit/${data._id}`} variant="warning">
              Ubah
            </SLinkButton>
            <SLinkButton to="/pemakaian" variant="danger" outline="true">
              Kembali
            </SLinkButton>
          </SFooter>
        </SContent>
      </SContainer>
    </>
  );
};

export default DetailPemakaian;
