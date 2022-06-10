import { SButton } from "./Styles";

const Button = ({ children, ...props }) => {
  return (
    <SButton {...props} disabled={props.load}>
      {props.load ? "load" : children}
    </SButton>
  );
};

export default Button;

Button.defaultProps = {
  type: "button",
};
