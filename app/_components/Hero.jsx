import React from "react";
import { Button } from "./../../components/ui/button";
import Image from "next/image";
import { AtomIcon, Edit, Share2, GitHub, LinkedIn, X } from "lucide-react";
import { Input } from "../../components/ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Hero() {

    return (
        <div>
            <Image src={'/image.png'} className="absolute z-[-10] w-full"
                width={1200} height={200} />

            <section className="z-50">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="https://github.com/YangaRubushe/nexgenlearn.git" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 mt-10 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">NextGen</span>
                        <span className="text-sm font-medium"> AI Course Generate Source Code</span>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Build and Manage <span className="text-blue-600">AI Courses</span> Effortlessly
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Unlock the potential of AI in education by creating personalized and scalable AI-powered courses using the NextGen platform.</p>

                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get Started
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            </section>
            <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h2 className="font-bold text-3xl">How NexGen Learn Works</h2>
                <h2 className="text-md text-gray-500">Create and share courses in just 3 simple steps</h2>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="block rounded-xl border bg-white border-blue-200 p-8 shadow-xl transition hover:border-blue-600/10 hover:shadow-blue-600/10"
                        href=""
                    >
                        <AtomIcon className='h-8 w-8' />

                        <h2 className="mt-4 text-xl font-bold text-black">Generate Course Content</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Utilize the <span className="text-md text-blue-600">Gemini AI API</span> to dynamically generate tailored course content based on your inputs, ensuring a personalized learning experience.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border bg-white border-blue-200 p-8 shadow-xl transition hover:border-blue-600/10 hover:shadow-blue-600/10"
                        href=""
                    >
                        <Edit className='h-8 w-8' />

                        <h2 className="mt-4 text-xl font-bold text-black">Edit and Customize Your Course</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Easily edit your course structure and content. Add chapters, customize learning paths, and integrate videos using the <span className="text-md text-blue-600">YouTube API</span> to enhance each chapter.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border bg-white border-blue-200 p-8 shadow-xl transition hover:border-blue-600/10 hover:shadow-blue-600/10"
                        href=""
                    >
                        <Share2 className='h-8 w-8' />

                        <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Share your courses with others easily. Unauthenticated users can view shared courses, while authenticated users can create their own and manage course access.
                        </p>
                    </a>
                </div>
            </section>


            <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                <span className="text-black">Ready to</span>
                                <span className="text-blue-600"> start learning</span>
                            </h2>
                            <p className="mx-auto max-w-[700px] text-black-700 md:text-xl">
                                Sign up now and embark on your personalized learning journey.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <form className="flex space-x-2">
                                <Input className="flex-1 border-blue-200" placeholder="Enter your email" type="email" />
                                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
                            </form>
                            <p className="text-xs text-black-600">
                                By signing up, you agree to our{" "}
                                <a className="underline underline-offset-2 hover:text-blue-800" href="#">
                                    Terms & Conditions
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-100">
                <p className="text-xs text-black">© 2024 NexGen Learn. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a className="text-xs hover:underline underline-offset-4 text-black-600 hover:text-black-800" href="">
                        Terms of Service
                    </a>
                    <a className="text-xs hover:underline underline-offset-4 text-black-600 hover:text-black-800" href="">
                        Privacy
                    </a>
                </nav>
                <div className="flex gap-4 mt-2 sm:mt-0">
                    <a href="https://github.com/YangaRubushe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-black hover:text-gray-300" />
                    </a>
                    <a href="https://x.com/YangaRubushe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 text-black hover:text-gray-300" />
                    </a>
                    <a href="https://linkedin.com/in/yanga-rubushe-2ba414273" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-black hover:text-gray-300" />
                    </a>
                </div>
            </footer>

        </div>
    );
}

export default Hero;
