import { TextInput, Datagrid, List, ReferenceField, TextField, DateInput, Edit, ReferenceInput, SimpleForm  } from 'react-admin';
export const AtoresList = () => (
  <List>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="date_of_birth" />
          <ReferenceField source="filmeId" reference="filmes" />
      </Datagrid>
  </List>
);


export const AtoreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="date_of_birth" />
            <ReferenceInput source="filmeId" reference="filmes" />
        </SimpleForm>
    </Edit>
);