import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import moment from "moment-timezone";
import "moment/locale/ko";

export default function BoardCommentListUIItem(props: IBoardCommentListUIItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    console.log("삭제함수");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal((prev) => !prev);
    console.log("삭제모달");
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={onClickOpenDeleteModal}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="https://i.esdrop.com/d/f/eJqYA2AGQd/yyE3nmKXaP.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="https://i.esdrop.com/d/f/eJqYA2AGQd/WbLATTiJjH.png"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="https://i.esdrop.com/d/f/eJqYA2AGQd/agh8fqnvIf.png"
                onClick={onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>
            {/* {props.el?.createdAt} */}
            {moment(props.el?.createdAt).tz("Asia/Seoul").startOf("hour").fromNow()}
          </S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
    </>
  );
}
