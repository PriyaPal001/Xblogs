import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const pricingPlans = [
  {
    title: "Basic",
    price: "$10/month",
    features: [
      { text: "10GB Storage", disabled: true },
      { text: "Basic Support", disabled: true },
      { text: "Single User", disabled: true },
      { text: "Community Access", disabled: false },
      { text: "Weekly Updates", disabled: false },
    ],
    highlight: false,
  },
  {
    title: "Standard",
    price: "$20/month",
    features: [
      { text: "50GB Storage", disabled: false },
      { text: "Priority Support", disabled: false },
      { text: "Up to 5 Users", disabled: false },
      { text: "Community Access", disabled: false },
      { text: "Daily Updates", disabled: false },
    ],
    highlight: true,
  },
  {
    title: "Premium",
    price: "$30/month",
    features: [
      { text: "200GB Storage", disabled: false },
      { text: "24/7 Support", disabled: false },
      { text: "Unlimited Users", disabled: false },
      { text: "Community Access", disabled: false },
      { text: "Real-time Updates", disabled: false },
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "This service has been a game-changer for our business. Highly recommend!",
    name: "John Doe",
    title: "CEO, Company A",
  },
  {
    quote:
      "Amazing experience! The team was professional and the results were outstanding.",
    name: "Jane Smith",
    title: "Marketing Director, Company B",
  },
  {
    quote:
      "Exceptional service and support. We couldn't be happier with the results.",
    name: "Michael Brown",
    title: "CTO, Company C",
  },
];

export default function Home() {
  return (
    <>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:flex lg:items-center lg:space-x-8">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" />
            components using{" "}
            <span className="font-semibold underline decoration-primary">
              Tailwind CSS
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" />
            bootstrap your new apps, projects, or landing sites!
          </p>

          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex items-center p-2 gap-2"
            >
              <input
                type="text"
                placeholder="Search components..."
                className="flex-1 px-4 py-2 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Illustration of Tailwind CSS components"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </section>


      

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div
                  className={`p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center ${
                    plan.highlight ? "border-2 border-purple-500" : ""
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {plan.title}
                  </h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">
                    {plan.price}
                  </p>
                  {plan.highlight && (
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                      Bestseller
                    </span>
                  )}
                  <ul className="mt-6 mb-6 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`text-gray-600 dark:text-gray-400 ${
                          feature.disabled ? "line-through" : ""
                        }`}
                      >
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <Button className="mx-1" variant="outline">
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    "{testimonial.quote}"
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
