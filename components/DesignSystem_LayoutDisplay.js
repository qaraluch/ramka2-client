import Link from "next/link";

export default function DesignSystem_LayoutDisplay({ children, title }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-full px-3 py-3 mt-0 text-gray-300">
        <div className="w-1/3 ">
          <Link href="/design-system" className="">
            &lt; DESIGN SYSTEM MAIN MENU
          </Link>
        </div>
        <div className="content-center w-1/3 text-center ">{title}</div>
        <div className="w-1/3 "></div>
      </div>
      <div className="w-auto h-screen mt-4 antialiased">
        <div className="flex flex-col items-center justify-center p-12 border">
          {children}
        </div>
      </div>
    </>
  );
}
