import {
  UseFormRegister,
  FieldValues,
  FormState,
  UseFormHandleSubmit,
} from "react-hook-form/dist/types";

export interface ISignUpUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickButton: (data: any) => Promise<void>;
}
