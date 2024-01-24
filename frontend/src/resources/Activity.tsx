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
  return <span>Activity {record ? `"${ record.Activityid }"` : ""}</span>;
};

export const ActivityList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <NumberField source="Activityid" />
<TextField source="Description" />
<TextField source="Tutorname" />
<TextField source="Costperlesson" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ActivityEdit = () => (
                    <Edit title={<ActivityTitle />}>
                      <SimpleForm>
                          <NumberInput source="Activityid"   />
<TextInput source="Description"   />
<TextInput source="Tutorname"   />
<TextInput source="Costperlesson"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ActivityCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="Activityid"   />
<TextInput source="Description"   />
<TextInput source="Tutorname"   />
<TextInput source="Costperlesson"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


