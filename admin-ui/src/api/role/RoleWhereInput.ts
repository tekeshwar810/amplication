import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RoleWhereInput = {
  admin?: StringNullableFilter;
  id?: StringFilter;
  users?: StringNullableFilter;
};
