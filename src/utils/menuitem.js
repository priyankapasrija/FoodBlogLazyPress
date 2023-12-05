const menuItemFontWeight = (menuItem, href) => {
    if (menuItem === 'Home' && href === '/') {
      return 'font-bold';
    } else if (menuItem === 'Contact' && href === '/contactus') {
      return 'font-bold';
    } else {
      return 'font-light';
    }
  };
  
  export { menuItemFontWeight };
  