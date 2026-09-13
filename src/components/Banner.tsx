// import React from 'react';

const Banner = () => {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto flex min-h-[550px] max-w-7xl items-center justify-between px-6 py-12 lg:px-12">

                {/* Left Side */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-5xl font-bold leading-tight text-slate-900">
                        Build Your Ideal
                        <br />

                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <button
                            className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 font-medium text-white hover:opacity-90"
                        >
                            Explore Technologies
                        </button>

                        <button
                            className="rounded-lg border border-gray-200 bg-white px-8 py-3 font-medium text-gray-600 hover:bg-gray-50"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="hidden w-1/2 justify-center lg:flex">
                    <img
                        src="/src/assets/banner-stack.png"
                        alt="Development Stack"
                        className="w-[420px] object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;