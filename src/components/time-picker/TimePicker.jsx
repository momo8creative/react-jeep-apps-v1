import useTime from "../../hooks/useTime";
import { SBackdrop } from "../../styles/SBackdrop";
import { SModal, SModalFooter, SModalHeader } from "../../styles/SModal";
import Button from "../button/Button";
import { STimeContainer, STimeSelect } from "./Styles";

const TimePicker = ({ data }) => {
  const { value, arrayValue, handleChange, handlePick, handleReset } =
    useTime(data);

  return (
    <>
      <SBackdrop />
      <SModal>
        <SModalHeader>Pilih Jam</SModalHeader>

        <STimeContainer>
          {["hh", "mm"].map((p, i) => (
            <STimeSelect
              name={p}
              value={value[p]}
              key={i}
              onChange={handleChange}
            >
              {arrayValue?.[p].map((v, i) => (
                <option value={v} key={i}>
                  {v}
                </option>
              ))}
            </STimeSelect>
          ))}
        </STimeContainer>

        <SModalFooter>
          <Button variant="primary" onClick={handlePick}>
            Pilih
          </Button>
          <Button variant="primary" outline onClick={handleReset}>
            Jam ini
          </Button>
        </SModalFooter>
      </SModal>
    </>
  );
};

export default TimePicker;
