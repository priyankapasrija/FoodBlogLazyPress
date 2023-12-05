import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

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

  return (
    <Table aria-label="Table of Ingredients" style={{ width: '20vw', fontSize: '0.8rem' }}>
      <TableHeader>
        <TableColumn style={{ width: '20vw' }}>List of Ingredients</TableColumn>
      </TableHeader>
      <TableBody>
        {ingredients.map((ingredient, index) => (
          <TableRow key={index + 1}>
            <TableCell>{ingredient}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
