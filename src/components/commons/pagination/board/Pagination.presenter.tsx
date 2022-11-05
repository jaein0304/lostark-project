import { Page, Wrapper } from "./Pagination.styles";
import { IPagination01UIProps } from "./Pagination.types";

export default function PaginationUI(props: IPagination01UIProps) {
  return (
    <Wrapper>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.currentPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </Wrapper>
  );
}
