import { Datagrid, List, TextField } from 'react-admin';

export const DiretoresList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="date_of_birth" />
        </Datagrid>
    </List>
);
