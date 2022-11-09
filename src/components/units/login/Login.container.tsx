import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import { LOGIN_USER } from "./Login.queries";
import { ILoginType } from "./Login.types";
import { schema } from "./Login.validation";

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickMoveJoin = () => {
    router.push("/login/join");
  };

  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  const onClickLogin = async (data: ILoginType) => {
    console.log("asd");
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      const accessToken = result?.data?.loginUser.accessToken;
      if (!accessToken) return;
      setAccessToken(accessToken);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <LoginUI
      onClickLogin={onClickLogin}
      onClickMoveJoin={onClickMoveJoin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
