import { Button, Link } from "@radix-ui/themes";
import { getMenu } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

export const HelpLinkPill = async () => {
  const menu = await getMenu();
  return (
    <Button variant="ghost" asChild>
      <Link href={menu.desktopMenu.helpLink}>
        <FontAwesomeIcon className="text-amber-500 size-4" icon={faLifeRing} />
        <p className="text-silver font-semibold">Hjälp & kontakt</p>
      </Link>
    </Button>
  );
};
