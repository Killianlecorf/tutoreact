import Pageinfo from './pages/pageInfo';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import UpdatePage from './pages/UpdatePage';
import DeletePage from './pages/DeletePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<Pageinfo  />}></Route>
            <Route path='/Create' element= {<CreatePage />}></Route>
            <Route path='/Read' element= {<ReadPage  />}></Route>
            <Route path='/Update' element= {<UpdatePage  />}></Route>
            <Route path='/Delete' element= {<DeletePage  />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
