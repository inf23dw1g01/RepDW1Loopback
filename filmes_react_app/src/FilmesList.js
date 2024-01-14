import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const FilmesList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="ano" />
            <ReferenceField source="diretoresId" reference="diretores" />
        </Datagrid>
    </List>
);
