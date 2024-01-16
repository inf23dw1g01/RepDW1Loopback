import { Datagrid, List, TextField, Edit, SimpleForm, TextInput, useRecordContext  } from 'react-admin';

const PostTitle = () => {
  const record = useRecordContext();
  return record ? (<span>Personagen {`"${record.name}"`}</span>):null
}

export const PersonagenList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="role" />
        </Datagrid>
    </List>
);

export const PersonagenEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="role" />
        </SimpleForm>
    </Edit>
);