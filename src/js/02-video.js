import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
setReloudTime();

player.on('play', throttle(playerOn, 1000));

function playerOn(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

function setReloudTime() {
  const timeToSet = localStorage.getItem('videoplayer-current-time');
  if (timeToSet) {
    player.setCurrentTime(timeToSet);
  }
}
