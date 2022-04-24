import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthLogin from "../components/AuthLogin";
import AuthSignUp from "../components/AuthSignUp";

function Auth() {
  const location = useLocation();
  let signUp: string | null = '';

  setSignUp()

  function setSignUp() {
    const queryParams = new URLSearchParams(location.search);
    const signUpParam = queryParams.get('signup');
    if (signUpParam !== signUp) {
      signUp = signUpParam;
    }
  }

  return (
    <Container>
      <h1 className="page-header">Authentcation</h1>
      {signUp ? <AuthSignUp /> : <AuthLogin />}
    </Container>
  )
}

export default Auth;
