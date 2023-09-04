import AccordionNextUI from './AccordionNextUI';
import CardNextUI from './CardNextUI';
import UsersPosts from './UsersPosts';

function LumiVerse() {
  return (
    <div className="flex">
      <div className="col-span-1">
        <AccordionNextUI />
      </div>
      <div className="justify-self-stretch">
        <CardNextUI />
      </div>
      <div>
        <UsersPosts />
      </div>
    </div>
  );
}

export default LumiVerse;
