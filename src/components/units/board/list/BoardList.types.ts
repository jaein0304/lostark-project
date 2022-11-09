import { ApolloQueryResult } from "@apollo/client/core/types";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  dataBoardsOfTheBest: Pick<IQuery, "fetchBoardsOfTheBest"> | undefined;

  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  count: number | undefined;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
}
