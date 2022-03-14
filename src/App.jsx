import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login';
import Registro from './pages/Registro';
import Details from './pages/Details';
import ListaPeliculas from './pages/ListaPeliculas';
import UserContextProvider from './context/UserContext';

const Page404 = () => <h1>Error 404 Page Not Found</h1>;

function App() {


  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<Registro />} />
          <Route path='/details/:state' element={<Details/>}/>
          <Route path='/lista' elements={<ListaPeliculas />}/>
          <Route path='*' element={<Page404 />} />

        </Routes>
      </UserContextProvider>
    </Router>
  )
}

export default App
