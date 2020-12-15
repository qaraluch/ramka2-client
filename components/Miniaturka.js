import Link from "next/link";

export default function Miniaturka({ imgPath, imgAlt, href = "/" }) {
  return (
    <div className="relative w-miniaturka h-miniaturka">
      <Link href={href}>
        <a>
          <img
            className="absolute object-cover w-full h-full p-px opacity-25 hover:opacity-100 focus:outline-none "
            src={imgPath}
            alt={imgAlt}
          />
        </a>
      </Link>
    </div>
  );
}
