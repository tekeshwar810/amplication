export type UserCreateInput = {
  address?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
