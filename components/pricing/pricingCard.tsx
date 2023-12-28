import { useEffect, useState } from "react";

interface PricingCardType {
  title: string;
  price: string;
  features: string[];
  buttonText?: string;
  plan?: string;
}
const PricingCard = ({
  title,
  price,
  features,
  buttonText,
  plan,
}: PricingCardType) => {
  console.log(plan);
  const [activated, setActivated] = useState(false);
  useEffect(() => {
    if (plan) {
      console.log(plan.toLowerCase(), title.toLowerCase());
      setActivated(plan.toLowerCase() === title.toLowerCase());
    }
  }, [plan]);

  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ${
        activated ? "border-green-500" : "border-gray-100"
      } dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white`}
    >
      {activated && (
        <svg
          className="w-6 h-6 text-green-500 self-end"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      )}
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {buttonText && (
        <a
          href={`/checkout/${title.toLowerCase()}`}
          className="text-white bg-black hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default PricingCard;
