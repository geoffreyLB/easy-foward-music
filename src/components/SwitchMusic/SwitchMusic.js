import React from 'react';
import SpotifySwitch from '@components/SwitchMusic/SpotifySwitch/SpotifySwitch';

const SwitchMusic = () => {
  return (
    <div className='switch-music'>
      Switch
      <div className='switch-music__container'>
        <div className='switch-music__spotify'>
          <SpotifySwitch />
        </div>
        <div className='switch-music__deezer'>Deezer</div>
      </div>
    </div>
  );
};

export default SwitchMusic;
