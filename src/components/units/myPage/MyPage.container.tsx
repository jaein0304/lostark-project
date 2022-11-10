import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsIPickedArgs } from "../../../commons/types/generated/types";
import MyPageUI from "./MyPage.presenter";
import { FETCH_USED_ITEMS_I_PICKED } from "./MyPage.queries";

export default function MyPage() {
  // 찜목록

  const { data: myPickData } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED);

  return <MyPageUI />;
}
