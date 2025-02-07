import Link from "next/link";
import { MenuItem } from "@/gql/graphql";

interface MenuProps {
  className: string;
  onLinkClick?: () => void;
}

export default function Menu({ className, onLinkClick }: MenuProps) {
  const menuItems = {
    nodes: [
      {
        label: "Portfolio",
        uri: "/portfolio",
        target: "_self",
      },
      {
        label: "Blog",
        uri: "/blog",
        target: "_self",
      },
      {
        label: "À propos",
        uri: "/a-propos",
        target: "_self",
      },
      {
        label: "Portraits d'équipe",
        uri: "/offre/portraits-dequipe",
        target: "_self",
      },
    ],
  };

  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
      className={className}
    >
      {menuItems.nodes.map((item, index: number) => {
        if (!item.uri) return null;

        return (
          <Link
            itemProp="url"
            href={item.uri}
            key={index}
            target={item.target || "_self"}
            onClick={handleClick}
            className="text-2xl font-semibold"
          >
            <span itemProp="name">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}