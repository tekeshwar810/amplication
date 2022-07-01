import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  demo?: StringNullableFilter;
  id?: StringFilter;
  test?: StringNullableFilter;
  title?: StringNullableFilter;
};
