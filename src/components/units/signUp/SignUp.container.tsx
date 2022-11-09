import { useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import SignUpUI from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SignUp.validation";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(
    CREATE_USER
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickButton = async (data: any) => {
    const { passwordConfirm, ...dataCheck } = data;
    try {
      await createUser({
        variables: { createUserInput: { ...dataCheck } },
      });
      alert("회원가입을 축하합니다🎉");
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
    />
  );
}
