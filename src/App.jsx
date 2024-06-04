import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListClient from './pages/ListClient';
import CreateClient from './pages/CreateClient';
import UpdateClient from './pages/UpdateClient';
import ShowClient from './pages/ShowClient';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Protected from './pages/Protected';
import Profile from './pages/Profile';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <>
      <div className="container">
        <div className="App">
          <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Protected Component={ListClient} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='home/user/:id' element={<Profile />} />
              <Route path='home/user/:id/edit' element={<UpdateUser />} />
              <Route path='home/client/create' element={<CreateClient />} />
              <Route path='home/client/:id' element={<ShowClient />} />
              <Route path='home/client/:id/edit' element={<UpdateClient />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
