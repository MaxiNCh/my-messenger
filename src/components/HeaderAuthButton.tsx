import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { selectAuthed } from '../store/user/selectors';

function HeaderAuthButton() {
  const navigate = useNavigate();
  const authed = useSelector(selectAuthed);

  const navigateToAuth = () => {
    navigate('/auth', { replace: true })
  }

  const processLogOut = () => {
    logOut();
  }

  const onClick = () => {
    if (authed) {
      processLogOut();
    } else {
      navigateToAuth();
    }
  }

  return (
    <Button sx={{ my: 2, color: 'white', display: 'block', textAlign: 'center' }}
      onClick={onClick}>
      {authed ? 'LOGOUT' : 'LOGIN'}
    </Button>
  )
}

export default HeaderAuthButton;
