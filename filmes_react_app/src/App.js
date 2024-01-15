import { Admin, Resource ,EditGuesser} from "react-admin";
import filmeProvider from "react-admin-lb4";
import './App.css';
import { AtoresList, AtoreEdit } from "./AtoresList";
import { DiretoresList, DiretoreEdit } from "./DiretoresList";
import { FilmesList, FilmeEdit } from "./FilmesList";
import { PersonagenList, PersonagenEdit } from "./PersonagensList";


const dataProvider = filmeProvider("http://localhost:8080");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="filmes" list={FilmesList} edit={FilmeEdit} />
        <Resource name="atores" list={AtoresList} edit={AtoreEdit} />
        <Resource name="diretores" list={DiretoresList} edit={DiretoreEdit} />
        <Resource name="personagens" list={PersonagenList} edit={PersonagenEdit}/>
    </Admin>
  );

export default App;
