import { ChangeEvent, MouseEvent } from "react";

// presenter
export interface IBoardWriteUIProps {
  buttonColor: boolean;
  passwordError: string;
  writerError: string;
  titleError: string;
  contentsError: string;
  fileUrls: string[];

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickCancel: () => void;
}

export interface ISubmitButtonProps {
  submitButton: boolean;
}
