import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListClient from './pages/ListClient';
import CreateClient from './pages/CreateClient';
import UpdateClient from './pages/UpdateClient';
import ShowClient from './pages/ShowClient';

function App() {
  return (
    <>
      <div className="container">
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ListClient />} />
              <Route path='client/create' element={<CreateClient />} />
              <Route path='client/:id' element={<ShowClient />} />
              <Route path='client/:id/edit' element={<UpdateClient />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
