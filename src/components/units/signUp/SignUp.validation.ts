import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(/^(?=.*\d)(?=.*\w).{6,16}$/, "영문+숫자 조합 6~16자리의 비밀번호를 입력해주세요."),
  passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "패스워드가 일치하지 않습니다."),
});
