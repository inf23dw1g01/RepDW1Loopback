import { Datagrid, List, TextField, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const DiretoresList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="date_of_birth" />
        </Datagrid>
    </List>
);


export const DiretoreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="date_of_birth" />
        </SimpleForm>
    </Edit>
);