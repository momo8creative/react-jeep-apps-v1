import { FaRegThumbsUp } from "react-icons/fa";
import { BsExclamationCircle, BsXCircle, BsCheckCircle } from "react-icons/bs";
import { SBackdrop } from "../../styles/SBackdrop";
import { SModal, SModalBody } from "../../styles/SModal";
import Button from "../button/Button";
import { SModalAlertContainer } from "./Styles";

const ModalAlert = ({ title, icon, data, onClose }) => {
  const [type, msg] = data.value;

  const handleOk = () => {
    data.callback();
    onClose();
  };

  return (
    <>
      <SBackdrop />
      <SModal>
        <SModalBody>
          <SModalAlertContainer variant={type}>
            {icon[type]}
            <h1>{title[type]}</h1>
            <div>{msg}</div>
            <Button variant="primary" outline onClick={handleOk}>
              <h2>
                <FaRegThumbsUp /> OK !
              </h2>
            </Button>
          </SModalAlertContainer>
        </SModalBody>
      </SModal>
    </>
  );
};

export default ModalAlert;

ModalAlert.defaultProps = {
  icon: {
    success: <BsCheckCircle />,
    danger: <BsXCircle />,
    warning: <BsExclamationCircle />,
  },
  title: {
    success: "Success.. !",
    danger: "Oopss.. !",
    warning: "Warning.. !",
  },
};
