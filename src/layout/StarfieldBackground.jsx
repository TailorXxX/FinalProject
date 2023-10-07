import StarfieldAnimation from 'react-starfield-animation';
import background from '../../assets/background.jpg';

function StarfieldBackground() {
  return (
    <StarfieldAnimation
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: `url(${background})`,
      }}
    />
  );
}

export default StarfieldBackground;
