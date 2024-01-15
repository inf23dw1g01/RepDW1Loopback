import { Datagrid, List, TextField, Edit, SimpleForm, TextInput } from 'react-admin';

export const PersonagenList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="role" />
        </Datagrid>
    </List>
);

export const PersonagenEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="role" />
        </SimpleForm>
    </Edit>
);