import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import './styles/App.css';


function App() {

  return (
    <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} >
          <Route path=":chatId" element={<Messages />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App;
