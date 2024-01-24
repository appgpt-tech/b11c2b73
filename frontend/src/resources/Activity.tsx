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
const ActivityTitle = () => {
  const record = useRecordContext();
  return <span>Activity {record ? `"${ record.Id }"` : ""}</span>;
};

export const ActivityList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Id" />
<TextField source="Description" />
<TextField source="Tutor" />
<TextField source="Costperlesson" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ActivityEdit = () => (
                    <Edit title={<ActivityTitle />}>
                      <SimpleForm>
                          <TextInput source="Id"   disabled/>
<TextInput source="Description"   />
<TextInput source="Tutor"   />
<TextInput source="Costperlesson"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ActivityCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Id"   disabled/>
<TextInput source="Description"   />
<TextInput source="Tutor"   />
<TextInput source="Costperlesson"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


