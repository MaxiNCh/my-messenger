import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleName } from '../store/profile/actions';
import { selectName, selectShowName } from '../store/profile/selectors';
import '../styles/Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);

  const clickHandler = () => {
    dispatch(toggleName);
  }

  return (
    <>
      <h1 className="page-header">Profile</h1>
      <div style={{ textAlign: 'center' }}>
        {showName && <span style={{ fontSize: '1.3rem' }}>{name}</span>}
        <Button color="success" onClick={clickHandler}>{showName ? 'Hide' : 'Show'}</Button>
      </div>
    </>
  )
}

export default Profile;
