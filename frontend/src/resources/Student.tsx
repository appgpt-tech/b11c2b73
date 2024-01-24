import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const StudentTitle = () => {
  const record = useRecordContext();
  return <span>Student {record ? `"${ record.Id }"` : ""}</span>;
};

export const StudentList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Id" />
<TextField source="Name" />
<TextField source="Surname" />
<TextField source="Email" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const StudentEdit = () => (
                    <Edit title={<StudentTitle />}>
                      <SimpleForm>
                          <TextInput source="Id"   disabled/>
<TextInput source="Name"   />
<TextInput source="Surname"   />
<TextInput source="Email"   />
                      </SimpleForm>
                    </Edit>
                  );

export const StudentCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Id"   disabled/>
<TextInput source="Name"   />
<TextInput source="Surname"   />
<TextInput source="Email"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


