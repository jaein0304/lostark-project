import styled from "@emotion/styled";

export const Button = styled.button`
  width: 130px;
  height: 40px;
  margin: 10px 0;
  border: none;
  font-size: 16px;
  font-weight: 500;
  background-color: #2b2b2b;
  color: white;
  text-shadow: black 0 0 6px;
  margin-right: 10px;
`;

interface IButtonProps {
  onClick?: any;
  type?: "button" | "submit" | "reset";
  title?: string;
  value?: any;
}

export default function BlackButton(props: IButtonProps) {
  return (
    <Button type={props?.type} onClick={props?.onClick}>
      {props?.title}
    </Button>
  );
}
