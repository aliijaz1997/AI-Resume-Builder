import { ChangeEvent, useState } from "react";
import { FormValues } from "../../utils/types/formValues";
import { FormikErrors } from "formik";

interface AccordionItemProps {
  index: number;
  activeAccordion: number | null;
  title: string;
  type: string;
  children: React.ReactNode;
  toggleAccordion: (index: number) => void;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormValues>>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  activeAccordion,
  toggleAccordion,
  title,
  type,
  setFieldValue,

  children,
}) => {
  const [edit, setEdit] = useState(false);
  const isActive = activeAccordion === index;
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    console.log(title, currentValue, type);
    if (type !== "custom") {
      if (type === "education") {
        setFieldValue("educationCustomName", currentValue);
      } else if (type === "experience") {
        setFieldValue("experienceCustomName", currentValue);
      }
    } else {
      if (type === "custom") {
        setFieldValue(`custom.${index - 3}.name`, currentValue);
      }
    }
  };
  return (
    <div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 ${
            isActive ? "hover:bg-gray-100 dark:hover-bg-gray-800" : ""
          }`}
        >
          {title === "Personal Information" ? (
            <span>{title}</span>
          ) : (
            <div className="flex items-center">
              {!edit ? (
                <span>{title}</span>
              ) : (
                <input
                  className={`${
                    isActive ? "bg-white" : "bg-gray-200"
                  } rounded-lg p-1`}
                  value={title}
                  onChange={handleTitleChange}
                  onBlur={() => {
                    setEdit(false);
                  }}
                />
              )}
              <svg
                onClick={() => setEdit(!edit)}
                className=" text-gray-500 w-3 h-3 dark:text-white ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
              </svg>
            </div>
          )}
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${
              isActive ? "" : "transform rotate-0"
            }`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={isActive}
            aria-controls={`accordion-collapse-body-${index}`}
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
