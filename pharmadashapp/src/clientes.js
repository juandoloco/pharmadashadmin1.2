import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ClientList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id_clientes" />
            <TextField source="cedula" />
            <TextField source="apellidos" />
            <TextField source="nombre" />
            <TextField source="telefono" />
            <TextField source="direccion" />
            <EditButton basePath="/clientes" />
            <DeleteButton basePath="/clientes" />
        </Datagrid>
    </List>
);

export const ClientEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="cedula" />
            <TextInput source="apellidos" />
            <TextInput source="nombre" />
            <TextInput source="telefono" />
            <TextInput source="direccion" />
        </SimpleForm>
    </Edit>
);

export const ClientCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="cedula" />
            <TextInput source="apellidos" />
            <TextInput source="nombre" />
            <TextInput source="telefono" />
            <TextInput source="direccion" />
        </SimpleForm>
    </Create>
);
