import { Link } from "@radix-ui/themes";
import { getMenu } from "../api";

export const Menu = async () => {
  const menu = await getMenu();
  return (
    <nav>
      <ul>
        {menu.desktopMenu.products.first.menuItems.map((menuItem) => (
          <li key={menuItem.name}>
            <Link style={{ color: "white" }} href={menuItem.url}>
              {menuItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
