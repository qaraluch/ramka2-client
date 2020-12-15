import Link from "next/link";
import React from "react";
import IconInformationCircle from "../Icons/IconInformationCircle";

export default function ButtonInfoMetadanych({
  href = "/",
  color = "black",
  colorHover = "gray-200",
}) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <Link href={href}>
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
