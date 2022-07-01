import { Role as TRole } from "../api/role/Role";

export const ROLE_TITLE_FIELD = "admin";

export const RoleTitle = (record: TRole): string => {
  return record.admin || record.id;
};
