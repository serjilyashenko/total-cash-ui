import React from 'react';
import { useAuth0 } from '../react-auth0-wrapper';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
  },
});

const Profile = () => {
  const { loading, user, isAuthenticated, logout } = useAuth0();
  const classes = useStyles();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Profile" src={user.picture} className={classes.bigAvatar} />
      </Grid>
      <h2>{user.name} {isAuthenticated && <Button color="secondary" onClick={() => logout()}>logout</Button>}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;
