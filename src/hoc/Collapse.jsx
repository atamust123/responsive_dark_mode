import { useState } from "react";

export default function Collapse({ button: { title }, children, id }) {
  const collapseId = `collapseExample-${id}`;
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[3px_8px_9px_-4px_rgba(59,173,202,0.7),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
        type="button"
        data-te-collapse-init
        data-te-ripple-init
        data-te-ripple-color="light"
        data-te-target={collapseId}
        aria-expanded="false"
        aria-controls={collapseId}
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
      </button>
      <div
        className={`!visible ${open ? "block" : "hidden"}`}
        id={collapseId}
        data-te-collapse-item
      >
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,1),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50">
          {children}
        </div>
      </div>
    </>
  );
}
