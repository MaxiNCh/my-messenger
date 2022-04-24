import { Alert, Button, Link, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { logIn } from "../services/firebase";

import '../styles/Auth.css';

function AuthLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    logIn(email, password)
      .catch((e) => {
        setError(e.code);
      })

  }

  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <TextField label="Email" type="email" color="secondary" required value={email} onChange={onEmailChange} />
      <TextField label="Password" type="password" color="secondary" required value={password} onChange={onPasswordChange} />
      <div className="auth-form__buttons">
        <Button className="auth-form__submit" type="submit" variant="contained" size="large" color="secondary" >Login</Button>
        <Link to="/auth?signup=1" component={RouterLink} >Registration</Link>
      </div>
      {error && <Alert variant="outlined" severity="error">
        {error}
      </Alert>}
    </form>
  )
}

export default AuthLogin;
