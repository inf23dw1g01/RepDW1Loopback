import { Datagrid, List, Filter, SelectInput , ReferenceField, TextField,  DateInput, Edit, ReferenceInput, SimpleForm, TextInput, useRecordContext  } from 'react-admin';

const PostTitle = () => {
  const record = useRecordContext();
  return record ? (<span>Personagen {`"${record.name}"`}</span>):null
}

export const DiretoresList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="date_of_birth" />
        </Datagrid>
    </List>
);


export const DiretoreEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="date_of_birth" />
        </SimpleForm>
    </Edit>
);