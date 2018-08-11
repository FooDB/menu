SELECT * from menus join submenus on menus.id = submenus.resid join items on submenus.id = items.subid where menus.id = 10000;
