import { Admin, Resource ,EditGuesser} from "react-admin";
import filmeProvider from "react-admin-lb4";
import './App.css';
import { AtoresList } from "./AtoresList";
import { DiretoresList } from "./DiretoresList";
import { FilmesList } from "./FilmesList";
import { PersonagenList } from "./PersonagensList";


const dataProvider = filmeProvider("http://localhost:8080");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="filmes" list={FilmesList} edit={EditGuesser} />
        <Resource name="atores" list={AtoresList} edit={EditGuesser} />
        <Resource name="diretores" list={DiretoresList} edit={EditGuesser} />
        <Resource name="personagens" list={PersonagenList} edit={EditGuesser}/>
    </Admin>
  );

export default App;
