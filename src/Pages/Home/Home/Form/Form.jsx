import { FaMoneyCheckAlt } from "react-icons/fa";

const Form = () => {
    return (
        <div className="bg-[#F4F4F4] text-[#444444]">
            <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-28">
                <h2 className="text-4xl font-semibold">Wow $0! That's some hefty savings. Drop your email below for a free consultation with our automation experts.</h2>

                <div className="pb-12">
                    <form>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="name" className="block text-xl font-medium leading-6 text-[#444444]">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        placeholder="Name"
                                        className="block w-full rounded-md border-0 py-1.5 text-[#444444] bg-white shadow-sm ring-0 ring-inset ring-white placeholder:text-gray-400 focus:ring-none focus:ring-white sm:text-lg sm:leading-10 p-3"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-xl font-medium leading-6 text-[#444444]">
                                    Company
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    id="company"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-0 ring-inset ring-white placeholder:text-gray-400 focus:ring-none focus:ring-white sm:text-lg sm:leading-10 p-3"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-xl font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-white shadow-sm ring-0 ring-inset ring-white placeholder:text-gray-400 focus:ring-none focus:ring-white sm:text-lg sm:leading-10 p-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="btn btn-ghost text-[#00876D] border-b-4 px-6 pt-6 pb-12 xl:px-16 xl:pt-9 xl:pb-16 border-[#00876D] hover:bg-[#00876D] hover:text-white text-xl">
                            <FaMoneyCheckAlt className="me-2"></FaMoneyCheckAlt> Start saving!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;