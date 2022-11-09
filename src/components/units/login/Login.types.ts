import { FieldValues } from "react-hook-form/dist/types/fields";
import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form/dist/types/form";

export interface ILoginUIProps {
  onClickLogin: (data: any) => Promise<void>;
  onClickMoveJoin: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
}
export interface ILoginType {
  email: string;
  password: string;
}
