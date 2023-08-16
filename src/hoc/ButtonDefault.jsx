export default function ButtonDefault({ title, buttonProps }) {
  return (
    <button
      type="button"
      className="block rounded-full border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 my-4 mx-auto"
      {...buttonProps}
    >
      {title}
    </button>
  );
}
