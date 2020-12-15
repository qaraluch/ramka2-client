import Link from "next/link";

export default function ButtonListOfComponentsDesignSystem({
  href = "/",
  name = "button",
}) {
  return (
    <div className="flex flex-col p-3 mt-3 bg-white border rounded w-96">
      <Link href={href}>
        <a className="px-4 py-2 text-gray-500 rounded hover:text-gray-200 text-normal">
          {name}
        </a>
      </Link>
    </div>
  );
}
