import {Accordion, AccordionItem} from "@nextui-org/react";

export default function AccordionCom() {
  const defaultContent =
    "In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/5 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.";


    

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
