import Link from "next/link";

export default function DesignSystemLayoutDisplay({ children, title }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between px-3 py-3 mt-0 text-gray-300">
        <div className="w-1/3 ">
          <Link href="/design-system" className="">
            &lt; DESIGN SYSTEM MAIN MENU
          </Link>
        </div>
        <div className="content-center w-1/3 text-center ">{title}</div>
        <div className="w-1/3 "></div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 ">
        {children}
      </div>
    </>
  );
}
