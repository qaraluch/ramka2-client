export default function InformationCircleIcon({ color = "black", size = "6" }) {
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
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
