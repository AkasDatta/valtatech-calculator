import { FaAngleRight, FaChevronDown } from "react-icons/fa";

const Faq = () => {
    return (
        <div className="bg-white text-[#444444]">
            <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-24">
                <h2 className="text-[#00876D] text-4xl font-bold">FAQ</h2>
                <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white"
                    >
                    <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                        className="flex cursor-pointer items-center text-gray-900"
                        >
                        <span className="relative h-5 w-5 shrink-0">
                            <div
                            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <FaAngleRight></FaAngleRight>                   
                            </div>
                            <div
                            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <FaChevronDown></FaChevronDown>
                            </div>
                        </span>
                        <h2 className="text-lg font-medium mb-1 mx-2">
                        What does this Invoice Calculator do?
                        </h2>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        In short, it will show you the cost savings of Accounts Payable Automation. Every business in New Zealand is different with how they manually process invoices so we’ve made the calculator editable in regards to how much your invoices currently cost to process.
                        </p>
                    </details>

                    <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                        >
                        <h2 className="text-lg font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>

                        <span className="relative h-5 w-5 shrink-0">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            </svg>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            </svg>
                        </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Faq;