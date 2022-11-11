import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageUIProps {
  myPickData: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
}
