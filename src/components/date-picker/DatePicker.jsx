import useDate from "../../hooks/useDate";
import { SBackdrop } from "../../styles/SBackdrop";
import {
  SModal,
  SModalBody,
  SModalFooter,
  SModalHeader,
} from "../../styles/SModal";
import Button from "../button/Button";
import {
  SDateContainer,
  SDateTanggal,
  SDateTanggalItem,
  SDateValue,
} from "./Styles";

const DatePicker = ({ data }) => {
  const {
    value,
    arrayTanggal,
    handleChange,
    handlePick,
    handleReset,
    getFullNameMonth,
  } = useDate(data);
  return (
    <>
      <SBackdrop />
      <SModal>
        <SModalHeader>Pilih Tanggal</SModalHeader>

        <SDateContainer>
          <SDateValue>
            <div>{value.dd}</div>
            <div>{getFullNameMonth(value.mm)}</div>
            <div>{value.yyyy}</div>
          </SDateValue>

          <SDateTanggal>
            {arrayTanggal?.map((v, i) => (
              <SDateTanggalItem
                active={v.active}
                minggu={v.minggu}
                key={i}
                onClick={() => handleChange(v.tgl, v.bln, v.thn)}
              >
                {v.tgl}
              </SDateTanggalItem>
            ))}
          </SDateTanggal>
        </SDateContainer>

        <SModalFooter>
          <Button onClick={handlePick} variant="primary">
            Pilih
          </Button>
          <Button variant="primary" outline onClick={handleReset}>
            Hari ini
          </Button>
        </SModalFooter>
      </SModal>
    </>
  );
};

export default DatePicker;
