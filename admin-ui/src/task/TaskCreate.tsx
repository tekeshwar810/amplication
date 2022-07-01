import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="demo" source="demo" />
        <TextInput label="test" source="test" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
