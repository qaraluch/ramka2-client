import Link from "next/link";
import IconColorSwatch from "../components/Icons/IconColorSwatch";
import IconCollection from "../components/Icons/IconCollection";

export default function HomePage() {
  return (
    <>
      {/* logo baner */}
      <div className="flex flex-wrap items-center content-center justify-between bg-logobg">
        <div className="w-1/3 m-1"></div>
        <div className="relative m-1 text-center w-80">
          <img src="/splash.jpg" alt="splash" />
          <div className="absolute left-logopositionx top-logopositiony">
            <span className="text-5xl antialiased tracking-wider text-shadow text-platinium font-exo">
              ramka
            </span>
            <span className="ml-1 text-sm antialiased align-top text-sandybrown font-exo">
              2
            </span>
          </div>
        </div>
        <div className="w-1/3 m-1 text-right"></div>
      </div>

      {/* menu */}
      <div className="flex flex-wrap items-center content-start justify-between min-h-screen bg-logobg">
        <div className="w-1/3 h-auto p-1 m-1"></div>
        <div className="p-3 m-1 text-center w-80 ">
          <button className="py-5 pl-4 font-bold border-2 rounded-lg shadow-md border-cgblue w-60 bg-platinium hover:text-white hover:bg-sandybrown hover:border-sandybrown text-cgblue font-exo border-gunmetal">
            <Link href="/collections/all">
              <div className="flex">
                <IconCollection color="cgblue" />
                <span className="ml-4 tracking-wider">All</span>
              </div>
            </Link>
          </button>
          <button className="py-5 pl-4 mt-2 font-bold border-2 rounded-lg shadow-md border-cgblue w-60 bg-platinium hover:text-white hover:bg-sandybrown hover:border-sandybrown text-cgblue font-exo border-gunmetal">
            <Link href="/design-system">
              <div className="flex">
                <IconColorSwatch color="cgblue" />
                <span className="ml-4 tracking-wider">Design System</span>
              </div>
            </Link>
          </button>
        </div>
        <div className="w-1/3 p-1 m-1 text-right"></div>
      </div>
    </>
  );
}
