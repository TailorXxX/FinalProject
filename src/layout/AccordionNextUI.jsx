import { Accordion, AccordionItem, Divider } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function AccordionNextUI() {
  const defaultContent = 'News Feed';

  return (
    <Accordion
      selectionMode="multiple"
      className="static">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="News Feed">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Friends">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        className="flex-column"
        key="3"
        aria-label="Accordion 3"
        title="Games">
        <Link to="/tictactoegame">TicTacToe</Link>
        <Divider />
        <Link to="/chess">Chess</Link>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Widgets">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
