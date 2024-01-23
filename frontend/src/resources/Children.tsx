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
const ChildrenTitle = () => {
  const record = useRecordContext();
  return <span>Children {record ? `"${ record.Childid }"` : ""}</span>;
};

export const ChildrenList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Childid" />
<TextField source="Name" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ChildrenEdit = () => (
                    <Edit title={<ChildrenTitle />}>
                      <SimpleForm>
                          <TextInput source="Childid"   />
<TextInput source="Name"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ChildrenCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Childid"   />
<TextInput source="Name"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,

    ];


