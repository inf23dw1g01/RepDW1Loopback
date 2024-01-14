import { Admin, Resource } from "react-admin";
import filmeProvider from "react-admin-lb4";
import './App.css';
import { AtoresList } from "./AtoresList";
import { DiretoresList } from "./DiretoresList";
import { FilmesList } from "./FilmesList";
import { PersonagenList } from "./PersonagensList";


const dataProvider = filmeProvider("http://localhost:8080");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="filmes" list={FilmesList} />
        <Resource name="atores" list={AtoresList} />
        <Resource name="diretores" list={DiretoresList} />
        <Resource name="personagens" list={PersonagenList} />
    </Admin>
  );

export default App;
