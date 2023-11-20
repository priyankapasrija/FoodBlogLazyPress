import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function TableCom() {
  const ingredients = [
    "Ground lean (7% fat) beef",
    "Large egg",
    "Minced onion",
    "Fine dried bread crumbs",
    "Worcestershire sauce",
    "Cloves garlic, peeled and minced",
    "Salt",
    "Pepper",
    "Hamburger buns (4 in. wide), split",
    "Mayonnaise",
    "Ketchup (1st occurrence)",
    "Ketchup (2nd occurrence)",
    "Iceberg lettuce leaves, rinsed",
    "Firm-ripe tomato, cored and thinly sliced",
    "Red onion, thin slices"
  ];

  const amounts = [
    "1 pound",
    "1",
    "½ cup",
    "¼ cup",
    "1 tablespoon",
    "1 or 2",
    "About 1/2 teaspoon",
    "About 1/4 teaspoon",
    "4",
    "About 1/4 cup",
    "About 1/4 cup",
    "About 1/4 cup",
    "4",
    "1",
    "4"
  ];
  
  return (
    <Table aria-label="Table of Ingridients">
    <TableHeader>
      <TableColumn>List of Ingredients</TableColumn>
      <TableColumn>Amount</TableColumn>
    </TableHeader>
    <TableBody>
      {ingredients.map((ingredient, index) => (
        <TableRow key={index + 1}>
          <TableCell>{ingredient}</TableCell>
          <TableCell>{amounts[index]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  );
}


             