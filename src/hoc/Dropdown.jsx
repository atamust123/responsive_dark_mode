export default function Dropdown({ title, options, active }) {
    return (
        <div className="relative inline-block">
            <button
                className={`text-secondary group-hover:text-white
            hover:text-white text-[18px] font-medium cursor-pointer
            underline-transition-tag
            `}
            >
                {title}
            </button>
            <div className={`hidden backdrop-blur-3xl absolute z-10 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:block ${active && "block"}`}>
                {options?.map((opt) => {
                    return (
                        <a
                            href={"#"}
                            key={opt?.id}
                            onClick={opt?.onClick}
                            className={`
                            bg-transparent
                            text-secondary 
                            hover:text-stone-50
                            block 
                            px-4
                            py-2
                            text-sm
                            underline-transition-tag
                            `}
                        >
                            {opt?.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
