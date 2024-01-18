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
const UserTitle = () => {
  const record = useRecordContext();
  return <span>User {record ? `"${ record.Userid }"` : ""}</span>;
};

export const UserList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Userid" />
<TextField source="Email" />
<TextField source="Name" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const UserEdit = () => (
                    <Edit title={<UserTitle />}>
                      <SimpleForm>
                          <TextInput source="Userid"   />
<TextInput source="Email"   />
<TextInput source="Name"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const UserCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Userid"   />
<TextInput source="Email"   />
<TextInput source="Name"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


