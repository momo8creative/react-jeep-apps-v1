import DataFieldFormPemakaian from "../../datas/DataFieldFormPemakaian";
import useDatePicker from "../../hooks/useDatePicker";
import useFormPemakaian from "../../hooks/useFormPemakaian";
import useTimePicker from "../../hooks/useTimePicker";
import Button from "../button/Button";
import DatePicker from "../date-picker/DatePicker";
import TimePicker from "../time-picker/TimePicker";
import {
  SFormBody,
  SFormControl,
  SFormFooter,
  SFormGroup,
  SFormGroupTitle,
  SFormRow,
} from "./Styles";

const FormPemakaian = ({ data, onSubmit }) => {
  const { values, errors, handleChange, handleSubmit } = useFormPemakaian(
    data,
    onSubmit
  );

  const { data: dataDatePicker, handleOpen: openDatePicker } = useDatePicker();
  const { data: dataTimePicker, handleOpen: openTimePicker } = useTimePicker();

  const { formField } = DataFieldFormPemakaian(
    values,
    errors,
    handleChange,
    openDatePicker,
    openTimePicker
  );

  return (
    <>
      {dataDatePicker && <DatePicker data={dataDatePicker} />}
      {dataTimePicker && <TimePicker data={dataTimePicker} />}

      <form onSubmit={handleSubmit}>
        <SFormBody>
          {formField.map(({ title, list, label, ...props }, i) => (
            <div key={i}>
              {title && (
                <SFormRow>
                  <SFormGroupTitle>{title}</SFormGroupTitle>
                  {list.map(({ label, ...props }, i) => (
                    <SFormGroup key={i}>
                      <label htmlFor="">{label}</label>
                      <SFormControl {...props} />
                    </SFormGroup>
                  ))}
                </SFormRow>
              )}

              {!title && (
                <SFormGroup>
                  <label htmlFor="">{label}</label>
                  <SFormControl {...props} />
                </SFormGroup>
              )}
            </div>
          ))}
        </SFormBody>

        <SFormFooter>
          <Button type="submit" variant="primary">
            Simpan
          </Button>
        </SFormFooter>
      </form>
    </>
  );
};

export default FormPemakaian;
