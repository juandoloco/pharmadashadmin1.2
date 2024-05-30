import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ItemList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id_items" />
            <TextField source="nombre" />
            <TextField source="precio" />
            <TextField source="cantidad" />
            <EditButton basePath="/items" />
            <DeleteButton basePath="/items" />
        </Datagrid>
    </List>
);

export const ItemEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="precio" />
            <TextInput source="cantidad" />
        </SimpleForm>
    </Edit>
);

export const ItemCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="precio" />
            <TextInput source="cantidad" />
        </SimpleForm>
    </Create>
);
