import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [like, setLike] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );

  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);

  // 목록
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  // 수정
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  // 삭제
  const onClickBoardDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 좋아요
  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: String(router.query.boardId) } },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickBoardDelete={onClickBoardDelete}
      onClickLike={onClickLike}
    />
  );
}
