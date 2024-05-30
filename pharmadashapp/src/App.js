import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider'; // Asegúrate de que la importación coincida con el nombre del archivo
import { ClientList, ClientEdit, ClientCreate } from './clients';
import { ItemList, ItemEdit, ItemCreate } from './items';
import { MensajeroList, MensajeroEdit, MensajeroCreate } from './mensajero';
import { OrdenList, OrdenEdit, OrdenCreate } from './ordenes';
import { RolList, RolEdit, RolCreate } from './roles';
import { SedeList, SedeEdit, SedeCreate } from './sede';
import { UsuarioList, UsuarioEdit, UsuarioCreate } from './usuario';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="clientes" list={ClientList} edit={ClientEdit} create={ClientCreate} />
        <Resource name="items" list={ItemList} edit={ItemEdit} create={ItemCreate} />
        <Resource name="mensajero" list={MensajeroList} edit={MensajeroEdit} create={MensajeroCreate} />
        <Resource name="ordenes" list={OrdenList} edit={OrdenEdit} create={OrdenCreate} />
        <Resource name="roles" list={RolList} edit={RolEdit} create={RolCreate} />
        <Resource name="sede" list={SedeList} edit={SedeEdit} create={SedeCreate} />
        <Resource name="usuario" list={UsuarioList} edit={UsuarioEdit} create={UsuarioCreate} />
    </Admin>
);

export default App;
