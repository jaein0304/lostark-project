import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      fetchPolicy: "network-only",
      // 서버 데이터만 사용, 항상 최신 데이터를 다룬다
    }
  );

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const { data: dataBoardsOfTheBest } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BOARDS_OF_THE_BEST);

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(`/boards/${(event.target as HTMLButtonElement).id}`);
  };

  // 검색
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    refetch({ search, page: 1 });
    refetchBoardsCount({ search });
  };

  return (
    <BoardListUI
      data={data}
      dataBoardsOfTheBest={dataBoardsOfTheBest}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  );
}
