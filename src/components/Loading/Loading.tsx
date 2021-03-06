import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 3500);
  }, []);

  return (
    <div className='loading'>
      {!animation ? (
        <CircularProgress className='loading__circular-progress' color="secondary" />
      ) : (
        <Redirect to='/home' />
      )}
    </div>
  );
};

export default Loading;
