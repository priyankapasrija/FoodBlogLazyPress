import {Accordion, AccordionItem} from "@nextui-org/react";

export default function AccordionCom() {
  const defaultContent =
    "This information will come from db";

  return (
    <>
    <h1 className="h1" style={{fontSize:'2rem'}}>How to Prepare and Cook it ?</h1>
    <Accordion>
      <AccordionItem key="1" aria-label="Step 1" title="Step 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Step 2" title="Step 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Step 3" title="Step 3">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Step 4" title="Step 4">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </>
  );
}
