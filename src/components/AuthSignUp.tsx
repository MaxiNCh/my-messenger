import { Alert, Button, Link, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { signUp } from "../services/firebase";

function AuthSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onPasswordRepeatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(e.target.value);
  }

  const isPasswordsMatch = () => {
    return password === passwordRepeat;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isPasswordsMatch()) {
      setError('Passwords don\'t match');
      return;
    }

    signUp(email, password)
      .then((userCredentials) => {
        resetForm();
      })
      .catch((e) => {
        setError(e.code);
      })
  }

  function resetForm() {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordRepeat('');
  }


  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <TextField
        label="Name" type="text" color="secondary" required
        inputProps={{ pattern: "[0-9a-zA-Z_]{3,}", title: "Must be at least 3 letters" }}
        value={name} onChange={onNameChange} />
      <TextField
        label="Email" type="email" color="secondary" required
        value={email} onChange={onEmailChange} />
      <TextField
        label="Password" type="password" color="secondary" required
        value={password} onChange={onPasswordChange} />
      <TextField
        label="Password repeat" type="password" color="secondary" required
        value={passwordRepeat} onChange={onPasswordRepeatChange} />
      <div className="auth-form__buttons">
        <Button
          className="auth-form__submit" type="submit"
          variant="contained" size="large" color="secondary" >Register</Button>
        <Link to="/auth" component={RouterLink} >Login</Link>
      </div>
      {error && <Alert variant="outlined" severity="error">
        {error}
      </Alert>}
    </form>
  )
}

export default AuthSignUp;
