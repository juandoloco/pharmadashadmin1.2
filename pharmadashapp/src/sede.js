import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const SedeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id_sede" />
            <TextField source="nombre_sede" />
            <TextField source="direccion" />
            <TextField source="telefono" />
            <EditButton basePath="/sede" />
            <DeleteButton basePath="/sede" />
        </Datagrid>
    </List>
);

export const SedeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre_sede" />
            <TextInput source="direccion" />
            <TextInput source="telefono" />
        </SimpleForm>
    </Edit>
);

export const SedeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre_sede" />
            <TextInput source="direccion" />
            <TextInput source="telefono" />
        </SimpleForm>
    </Create>
);
