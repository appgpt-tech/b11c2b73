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
const CardTitle = () => {
  const record = useRecordContext();
  return <span>Card {record ? `"${ record.Cardid }"` : ""}</span>;
};

export const CardList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Cardid" />
<TextField source="Cardname" />
<TextField source="Serial" />
<TextField source="Price" />
<TextField source="Serialxref" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CardEdit = () => (
                    <Edit title={<CardTitle />}>
                      <SimpleForm>
                          <TextInput source="Cardid"   />
<TextInput source="Cardname"   />
<TextInput source="Serial"   />
<TextInput source="Price"   />
<TextInput source="Serialxref"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const CardCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Cardid"   />
<TextInput source="Cardname"   />
<TextInput source="Serial"   />
<TextInput source="Price"   />
<TextInput source="Serialxref"   />
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
,

    ];


