import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TodoWhereInput = {
  demo?: StringNullableFilter;
  id?: StringFilter;
  test?: StringNullableFilter;
  title?: StringNullableFilter;
};
