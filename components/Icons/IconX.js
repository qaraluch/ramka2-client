export default function IconX({ color = "black", size = "6" }) {
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
