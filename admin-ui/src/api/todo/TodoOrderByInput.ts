import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  createdAt?: SortOrder;
  demo?: SortOrder;
  id?: SortOrder;
  test?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
