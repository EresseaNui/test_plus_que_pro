import React from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const links = [
    { id: "1", name: "link 1", uri: "/" },
    { id: "2", name: "link 2", uri: "/" },
  ] as const;
  return (
    <div>
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

export default Footer;