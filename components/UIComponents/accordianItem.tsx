interface AccordionItemProps {
  index: number;
  activeAccordion: number | null;
  toggleAccordion: (index: number) => void;
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  activeAccordion,
  toggleAccordion,
  title,
  children,
}) => {
  const isActive = activeAccordion === index;

  return (
    <div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 ${
            isActive ? "hover:bg-gray-100 dark:hover-bg-gray-800" : ""
          }`}
          onClick={() => toggleAccordion(index)}
          aria-expanded={isActive}
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${
              isActive ? "" : "transform rotate-0"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`p-5 border border-${
          isActive ? "b-0" : "t-0"
        } border-gray-200 dark:border-gray-700`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
        style={{ display: isActive ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
