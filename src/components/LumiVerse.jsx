import AccordionNextUI from './AccordionNextUI';
import UsersPosts from './UsersPosts';

function LumiVerse() {
  return (
    <div className="grid">
      <div className="flex">
        <AccordionNextUI />
      </div>

      <div className="flex">
        <UsersPosts />
      </div>
    </div>
  );
}

export default LumiVerse;
