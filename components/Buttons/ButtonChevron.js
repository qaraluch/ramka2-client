import Link from "next/link";
import React from "react";
import { IconChevronRight, IconChevronLeft } from "../Icons/IconChevron";

function ButtonChevronLeft({
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
          <IconChevronLeft color={colorHover} />
        ) : (
          <IconChevronLeft color={color} />
        )}
      </button>
    </Link>
  );
}

function ButtonChevronRight({
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
          <IconChevronRight color={colorHover} />
        ) : (
          <IconChevronRight color={color} />
        )}
      </button>
    </Link>
  );
}

export { ButtonChevronLeft, ButtonChevronRight };
