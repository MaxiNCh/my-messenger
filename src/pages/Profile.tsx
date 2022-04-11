import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IProfileState } from '../interfaces/ProfileState';
import { toggleName } from '../store/profile/actions';
import '../styles/Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const { showName, name } = useSelector((state: IProfileState) => state);

  const clickHandler = () => {
    dispatch(toggleName);
  }

  return (
    <>
      <h1 className="header">Profile</h1>
      <div style={{ textAlign: 'center' }}>
        {showName && <span style={{ fontSize: '1.3rem' }}>{name}</span>}
        <Button color="success" onClick={clickHandler}>{showName ? 'Hide' : 'Show'}</Button>
      </div>
    </>
  )
}

export default Profile;
