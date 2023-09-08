import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className="font-bold mb-3">{text}</h1>;
};

export default Heading;
