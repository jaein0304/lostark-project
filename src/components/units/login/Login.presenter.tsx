import Link from "next/link";
import * as C from "../../commons/sign/index";
import { Button, SignUp, SignUpWrapper } from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <C.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <C.MainWrapper>
          <C.Logo src="https://i.esdrop.com/d/f/eJqYA2AGQd/SxwrJrSrTF.png" />
          <C.Label />
          <C.Input type="text" placeholder="이메일" {...props.register("email")} />
          <C.Error>{props.formState.errors.email?.message}</C.Error>
          <C.Label />
          <C.Input type="password" placeholder="비밀번호" {...props.register("password")} />
          <C.Error>{props.formState.errors.password?.message}</C.Error>
          <Button type="submit">로그인</Button>
          <SignUpWrapper>
            <Link href="/signUp">
              <a>
                <SignUp style={{ color: "black" }}>회원가입</SignUp>
              </a>
            </Link>
          </SignUpWrapper>
        </C.MainWrapper>
      </form>
    </C.Wrapper>
  );
}
