import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  admin?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  users?: SortOrder;
};
