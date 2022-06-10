import { SToastContainer } from "./Styles";

const Toast = ({ response }) => {
  return (
    <>
      <SToastContainer status={response ? response[0] : null}>
        <div>{response ? response[1] : "proses..."}</div>
      </SToastContainer>
    </>
  );
};

export default Toast;
