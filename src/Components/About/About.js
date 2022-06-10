import React from 'react';
import myPhoto from '../../Assets/images/My-photo.png'

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, <br /> I'm Hossain Sarker.
                        <br className="hidden lg:inline-block" />I love to build amazing
                        Website.
                    </h1>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                            Hire Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 hover:text-white rounded text-lg">
                            See My Projects
                        </a>
                        <a
                            href="https://drive.google.com/file/d/13uxL9NN2y07U_ScMP1smPgwHzJwJKd14/view"
                            target="_blank"
                            rel='noreferrer'
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 hover:text-white rounded text-lg">
                            See My Resume
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={myPhoto}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;