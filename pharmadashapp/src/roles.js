import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const RolList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id_rol" />
            <TextField source="nombre_rol" />
            <TextField source="descripcion" />
            <EditButton basePath="/roles" />
            <DeleteButton basePath="/roles" />
        </Datagrid>
    </List>
);

export const RolEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre_rol" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Edit>
);

export const RolCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre_rol" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Create>
);
