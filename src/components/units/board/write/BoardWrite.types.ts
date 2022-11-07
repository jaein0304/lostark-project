import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// presenter
export interface IBoardWriteUIProps {
  buttonColor: boolean;
  passwordError: string;
  writerError: string;
  titleError: string;
  contentsError: string;
  fileUrls: string[];
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickCancel: () => void;
  onClickUpdate: () => Promise<void>;
}

export interface ISubmitButtonProps {
  submitButton: boolean;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
