import BoardWriteUI from "./BoardWrite.presenter";
import { ChangeEvent, useEffect, useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [buttonColor, setButtonColor] = useState(false);

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );

  const onClickCancel = () => {
    router.push("/boards/");
  };

  // 작성자
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") setWriterError("");

    if (event.target.value && password && title && contents) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  };

  // 비밀번호
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (writer && event.target.value && title && contents) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  };

  // 제목
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  };

  // 내용
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (writer && password && title && event.target.value) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  };

  // 유튜브
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 등록
  const onClickSubmit = async () => {
    if (!title) setTitleError("제목을 입력해주세요.");
    if (!writer) setWriterError("이름을 입력해주세요.");
    if (!password) setPasswordError("비밀번호를 입력해주세요.");
    if (!contents) setContentsError("내용을 입력해주세요.");

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              title,
              writer,
              password,
              contents,
              youtubeUrl,
              images: [...fileUrls],
            },
          },
        });
        router.push(`/boards/${result.data?.createBoard._id}`);
        console.log(result);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickCancel={onClickCancel}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeFileUrls={onChangeFileUrls}
      buttonColor={buttonColor}
      fileUrls={fileUrls}
    />
  );
}
