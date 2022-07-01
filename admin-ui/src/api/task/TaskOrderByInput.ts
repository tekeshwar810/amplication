import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  demo?: SortOrder;
  id?: SortOrder;
  test?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
