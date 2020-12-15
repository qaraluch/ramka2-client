function IconChevronRight({ color = "black", size = "6" }) {
  const classNameFinal = `w-${size} h-${size} text-${color}`;
  return (
    <svg
      className={classNameFinal}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function IconChevronLeft({ color = "black", size = "6" }) {
  const classNameFinal = `w-${size} h-${size} text-${color}`;
  return (
    <svg
      className={classNameFinal}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function IconChevronDown({ color = "black", size = "6" }) {
  const classNameFinal = `w-${size} h-${size} text-${color}`;
  return (
    <svg
      className={classNameFinal}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function IconChevronUp({ color = "black", size = "6" }) {
  const classNameFinal = `w-${size} h-${size} text-${color}`;
  return (
    <svg
      className={classNameFinal}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
}

export { IconChevronUp, IconChevronDown, IconChevronLeft, IconChevronRight };
