import './App.css'
import Acceuil from './pages/Acceuil'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Chat from './pages/Chat'
import InfoFako from './pages/InfoFako';
import Profil from './pages/Profil';




function App() {
  return (
    <Routes >
      <Route path="/" Component={Acceuil} />
      <Route path="/chat" Component={Chat}/>
      <Route path="/info" Component={InfoFako}/>
      <Route path="/profil" Component={Profil} />
    </Routes>
  )
}

export default App
