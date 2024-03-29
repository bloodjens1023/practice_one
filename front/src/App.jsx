import './App.css'
import Acceuil from './pages/Acceuil'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About'
import InfoFako from './pages/InfoFako';
import Profil from './pages/Profil';
import VenteFako from './pages/VenteFako';
import Connexion from './pages/Connexion';
import Valider from './pages/Valider';




function App() {
  return (
    <Routes >
      <Route path="/" Component={Connexion} />
      <Route path="/acceuil" Component={Acceuil} />
      <Route path="/about" Component={About}/>
      <Route path="/info" Component={InfoFako}/>
      <Route path="/profil" Component={Profil} />
      <Route path="/vente" Component={VenteFako}/>
      <Route path="/valider" Component={Valider}/>
    </Routes>
  )
}

export default App
