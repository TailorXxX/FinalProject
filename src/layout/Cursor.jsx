import AnimatedCursor from 'react-animated-cursor';

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={12}
      color="185, 255, 249"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
}
