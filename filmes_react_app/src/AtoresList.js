import { Datagrid, List, ReferenceField, TextField } from 'react-admin';
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
