import React from "react";

function Hero() {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Transform Your Learning Experience.
                        <strong className="font-extrabold text-primary sm:block"> Empower Your Future. </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Discover personalized educational pathways tailored just for you. Join us to unlock your potential and achieve your goals!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                            href="#"
                        >
                            Start Your Journey
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-secondary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                            href="#"
                        >
                            Explore Features
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;