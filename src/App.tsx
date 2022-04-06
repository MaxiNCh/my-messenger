import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Chats from './pages/Chats';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/App.css';


function App() {

  return (
    <BrowserRouter>
      <ResponsiveAppBar></ResponsiveAppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/chat/:chatId" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App;
