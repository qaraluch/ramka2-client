import Link from "next/link";
import React from "react";
import IconInformationCircle from "../Icons/IconInformationCircle";

export default function ButtonInfoMetadanych({
  href = "/",
  color = "black",
  colorHover = "gray-200",
  query = {},
}) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <Link href={{ pathname: href, query }}>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <IconInformationCircle color={colorHover} />
        ) : (
          <IconInformationCircle color={color} />
        )}
      </button>
    </Link>
  );
}
