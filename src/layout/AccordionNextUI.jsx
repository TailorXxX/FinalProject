import { Accordion, AccordionItem } from '@nextui-org/react';

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
        title="Games">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Widgets">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
