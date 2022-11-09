import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data: Pick<IQuery, "fetchBoard"> | undefined;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickBoardDelete: () => Promise<void>;
  onClickLike: () => Promise<void>;
}
