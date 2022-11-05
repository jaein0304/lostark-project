import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPagination01Props } from "./Pagination.types";

export default function Pagination(props: IPagination01Props) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const currentPage = Number(event.target.id);
    setCurrentPage(currentPage);
    props.refetch({ page: currentPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setCurrentPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setCurrentPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <PaginationUI
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
