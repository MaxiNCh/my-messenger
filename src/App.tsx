import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { useAppDispatch } from './hooks';
import Auth from './pages/Auth';
import Chats from './pages/Chats';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import PrivateRoute from './pages/PrivateRoute';
import Profile from './pages/Profile';
import PublicRoute from './pages/PublicRoute';
import { auth } from './services/firebase';
import { authUser } from './store/user/actionCreators';
import { selectAuthed } from './store/user/selectors';
import './styles/App.css';

function App() {
  const dispatch = useAppDispatch();
  const authed = useSelector(selectAuthed);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(authUser(user));
    })

    return unsubscribe;
  }, [])

  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth" element={<PublicRoute authed={authed} />}>
          <Route path="" element={<Auth />} />
        </Route>

        <Route path="/chat" element={<PrivateRoute authed={authed} />}>
          <Route path="" element={<Chats />} />
          <Route path=":chatId" element={<Chats />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute authed={authed} />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
