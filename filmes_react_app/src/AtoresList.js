import {Datagrid, List, Filter, SelectInput , ReferenceField, TextField,  DateInput, Edit, ReferenceInput, SimpleForm, TextInput, useRecordContext } from 'react-admin';

const PostTitle = () => {
  const record = useRecordContext();
  return record ? (<span>Atores {`"${record.name}"`}</span>) : null
}

const PostFilter = (props) => <Filter {...props}>
  <TextInput label="Search" source="nome" alwaysOn />
  <ReferenceInput label = "Name" source = "filmeId" reference="Filme" allowEmpty>
    <SelectInput optionText="description" />
  </ReferenceInput>
</Filter >

export const AtoresList = (props) => (
  <List filters={<PostFilter />} {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="date_of_birth" />
          <ReferenceField source="filmeId" reference="filmes" />
      </Datagrid>
  </List>
);


export const AtoreEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <DateInput source="date_of_birth" />
            <ReferenceInput source="filmeId" reference="filmes" />
        </SimpleForm>
    </Edit>
);