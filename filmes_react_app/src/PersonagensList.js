import { Datagrid, List, TextField } from 'react-admin';

export const PersonagenList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="role" />
        </Datagrid>
    </List>
);
