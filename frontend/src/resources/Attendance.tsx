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
          <NumberField source="Id" />
<TextField source="Date" />
<NumberField source="Studentid" />
<NumberField source="Activityid" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AttendanceEdit = () => (
                    <Edit title={<AttendanceTitle />}>
                      <SimpleForm>
                          <NumberInput source="Id"   disabled/>
<TextInput source="Date"   />
<NumberInput source="Studentid"   />
<NumberInput source="Activityid"   />
                      </SimpleForm>
                    </Edit>
                  );

export const AttendanceCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <NumberInput source="Id"   disabled/>
<TextInput source="Date"   />
<NumberInput source="Studentid"   />
<NumberInput source="Activityid"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


