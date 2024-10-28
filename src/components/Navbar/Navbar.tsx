import React from "react";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const links = [
    { id: "1", name: "link 1", uri: "/" },
    { id: "2", name: "link 2", uri: "/" },
  ] as const;
  return (
    <div className="sticky bg-white w-full">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={`${link.uri}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;