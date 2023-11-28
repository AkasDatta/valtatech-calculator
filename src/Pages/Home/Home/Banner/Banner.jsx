// Banner.js
import './Banner.css'; // Import your CSS file

const Banner = () => {
    return (
        <div className="bg-[#009f72] text-white">
            <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12">
                <h2 className="text-6xl font-bold">Invoice Savings Calculator</h2>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-8 text-xl font-semibold gap-8">
                    <div className="relative group">
                        <p className='mx-8'>
                            I wonder how much I could save using an automated Accounts Payable system?
                        </p>
                        <p className="my-3 mx-8">- Almost every single CFO, New Zealand Businesses</p>
                        <div className="hoverLine"></div>
                    </div>
                    <div className="md:my-4 sm:my-4 lg:my-0">
                        <p>
                            Our handy interactive invoice calculator shows you just how much money you
                            could be saving by automating your Accounts Payable. Spoiler … it’s a lot.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
