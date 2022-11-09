import * as C from "../../commons/sign/index";
import { ISignUpUIProps } from "./SignUp.types";
export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <C.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickButton)}>
        <C.MainWrapper>
          <C.Logo src="https://i.esdrop.com/d/f/eJqYA2AGQd/SxwrJrSrTF.png" />
          <C.Label>이름</C.Label>
          <C.Input type="text" {...props.register("name")} />
          <C.Error>{props.formState.errors.name?.message}</C.Error>
          <C.Label>이메일</C.Label>
          <C.Input type="text" {...props.register("email")} />
          <C.Error>{props.formState.errors.email?.message}</C.Error>
          <C.Label>비밀번호</C.Label>
          <C.Input type="password" {...props.register("password")} />
          <C.Error>{props.formState.errors.password?.message}</C.Error>
          <C.Label>비밀번호 확인</C.Label>
          <C.Input type="password" {...props.register("passwordConfirm")} />
          <C.Error>{props.formState.errors.passwordConfirm?.message}</C.Error>
          <C.Button>회원가입</C.Button>
        </C.MainWrapper>
      </form>
    </C.Wrapper>
  );
}
