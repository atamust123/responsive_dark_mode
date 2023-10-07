import { Fragment, useState } from "react";

/**
 *
 * @param options:{name:string, children, }[]
 * @returns
 */
export const Tabs = ({ options }) => {
  const [active, setActive] = useState(options?.[0].id);
  return (
    <div className="sticky h-max top-24 max-w-lg mx-auto w-max max-sm:static">
      <div className="bg-tertiary border-b rounded-t-2xl w-64">
        <label className="inline-block w-full px-4 py-3 text-center cursor-pointer">
          Categories
        </label>
      </div>
      {options.map((opt) => (
        <div
          key={opt.id}
          className={`bg-tertiary ${
            opt.id !== active && "hover:bg-tertiary hover:opacity-70"
          }  ${opt.id === active && "bg-[#1c51d6]"}`}
        >
          <input
            type="radio"
            name="tabs"
            id={opt.id}
            className="absolute opacity-0"
            checked={active === opt.id}
            onChange={() => setActive(opt.id)}
          />
          <label
            htmlFor={opt.id}
            className="w-full px-4 py-3 text-center cursor-pointer flex flex-row items-center"
          >
            {opt.name}{" "}
            <span className="text-sm ml-auto bg-cyan-700 px-2 rounded-xl">
              {opt.counter}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};
