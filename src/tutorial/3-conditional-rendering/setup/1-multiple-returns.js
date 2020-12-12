import React, { useState, useEffect } from 'react';
import stillLoading from '../../../assets/loading.gif';
const url = 'https://api.github.com/users/john-smilga';
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  const [avatar, setAvatar] = useState(
    'https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png'
  );

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) return resp.json();
        else {
          setisLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login, avatar_url } = user;
        setUser(login);
        setAvatar(avatar_url);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <img src={stillLoading} alt='Loading' />;
  }

  if (isError) {
    return (
      <div>
        <h1>An error has occured</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
      <img
        src={avatar}
        alt='User avatar'
        style={{ width: '200px', height: '200px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default MultipleReturns;
