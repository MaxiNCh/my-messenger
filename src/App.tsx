import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import Chats from './pages/Chats';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { store } from './store';
import './styles/App.css';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/chat/:chatId" element={<Chats />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/holidays" element={<Holidays />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
