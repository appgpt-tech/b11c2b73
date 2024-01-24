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
const AttendanceTitle = () => {
  const record = useRecordContext();
  return <span>Attendance {record ? `"${ record.Id }"` : ""}</span>;
};

export const AttendanceList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Id" />
<TextField source="Date" />
<TextField source="Studentid" />
<TextField source="Activityid" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AttendanceEdit = () => (
                    <Edit title={<AttendanceTitle />}>
                      <SimpleForm>
                          <TextInput source="Id"   disabled/>
<TextInput source="Date"   />
<TextInput source="Studentid"   />
<TextInput source="Activityid"   />
                      </SimpleForm>
                    </Edit>
                  );

export const AttendanceCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Id"   disabled/>
<TextInput source="Date"   />
<TextInput source="Studentid"   />
<TextInput source="Activityid"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


