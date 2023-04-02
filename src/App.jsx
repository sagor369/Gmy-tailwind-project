import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./components/Link/Link";
import PriceCart from "./components/PriceCart/PriceCart";
import LiveScore from "./components/LiveScore/LiveScore";

function App() {
  const [open, setOpen] = useState(false);

  const render = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      <nav>
        <div onClick={() => setOpen(!open)} className="bg-purple-300">
          <span className="md:hidden">
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500" />
            )}
          </span>
        </div>
        <ul
          className={`bg-purple-300 py-3 px-5 md:flex gap-3 absolute duration-500 md:static ${
            open ? "top-6" : "-top-36"
          }`}
        >
          {render.map((data) => (
            <Link data={data} key={data.id}></Link>
          ))}
        </ul>
        <h1 className="bg-purple-500 text-center py-3 text-4xl mt-4 text-purple-950">
          Hello Dear Wellcome To My Gym Center
        </h1>
      </nav>
      <PriceCart></PriceCart>
      <LiveScore></LiveScore>
    </div>
  );
}

export default App;
