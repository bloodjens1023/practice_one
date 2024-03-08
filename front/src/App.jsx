import './App.css'
import Acceuil from './pages/Acceuil'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Chat from './pages/Chat'




function App() {
  return (
    <Routes >
      <Route path="/" Component={Acceuil} />
      <Route path="/chat" Component={Chat}/>
    </Routes>
  )
}

export default App
