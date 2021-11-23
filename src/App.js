import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperheroes.page";
import SuperHeroesPage from "./components/Superheroes.page";


function Topbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
        </ul>
      </nav >
    </div>
  )
}


function App() {
  return (
    <div className="App">


      <BrowserRouter>
          <Topbar/>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
