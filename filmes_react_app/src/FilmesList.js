import { Datagrid, DateInput, Edit, Filter, List, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput, useRecordContext } from 'react-admin';

const PostTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Filme {`"${record.name}"`}</span>):null
}

const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="nome" alwaysOn />
    <ReferenceInput label = "Name" source = "diretoresId" reference="Diretores" allowEmpty>
        <SelectInput optionText="description" />
    </ReferenceInput>
    </Filter >

export const FilmesList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="ano" />
            <ReferenceField source="diretoresId" reference="diretores" />
        </Datagrid>
    </List>
);

export const FilmeEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <DateInput source="ano" />
            <ReferenceInput source="diretoresId" reference="diretores" />
        </SimpleForm>
    </Edit>
);
