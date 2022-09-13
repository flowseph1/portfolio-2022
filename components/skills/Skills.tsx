import React from 'react';
import { HiCode } from 'react-icons/hi';
import { MdDeveloperMode } from 'react-icons/md';
import frontEndIlustration from '../../assets/images/Programming-amico.svg';
import mobileAppIlustration from '../../assets/images/App development-rafiki.svg';

function Skills() {
    return (
        <div className="group w-[60em] mx-auto py-5 flex justify-center px-5">
            {/*  <div className="flex flex-col mb-10 w-fit ">
                <h1 className="font-newake text-4xl">SKILLS</h1>
                <div className="h-1 w-3/5 bg-blue-700 group-hover:w-full transition-all delay-75 ease-in-out" />
            </div> */}
            <div className="-mt-14 z-40 relative shadow-xl rounded-xl">
                <div className="bg-white rounded-xl flex">
                    <div className="flex-1 border-r-[1px] p-5 cursor-pointer rounded-l-xl group space-y-2 hover:scale-110 bg-white hover:shadow-md transition ease-in">
                        <h2 className="text-md font-semibold">FRONT-END</h2>
                        <div className="p-2 w-fit rounded-md border border-blue-900 shadow-[0_0_0_4px_rgba(30,58,138,0.1)]">
                            <HiCode className="" />
                        </div>
                        {/* <div className="flex justify-center py-2">
                            <img src={frontEndIlustration.src} alt="" className="h-48" />
                        </div> */}
                        <p className="text-sm text-gray-500 ">
                            Passionate for web development using libraries as React and frameworks like Next.js to
                            create quality user interfaces.
                        </p>
                    </div>
                    <div className="flex-1 border-r-[1px] p-5 cursor-pointer group space-y-2 hover:scale-110 bg-white hover:shadow-md transition ease-in">
                        <h2 className="text-md font-semibold">MOBILE DEVELOPMENT</h2>
                        <div className="p-2 w-fit rounded-md border border-blue-900 shadow-[0_0_0_4px_rgba(30,58,138,0.1)]">
                            <MdDeveloperMode />
                        </div>
                        {/* <div className="flex justify-center py-2">
                            <img src={mobileAppIlustration.src} alt="" className="h-48" />
                        </div> */}
                        <p className="text-sm text-gray-500 ">
                            Using React Native to develop cross-platform mobile applications.
                        </p>
                    </div>
                    <div className="flex-1 border-r-[1px] p-5 cursor-pointer rounded-r-xl group space-y-2 hover:scale-110 bg-white hover:shadow-md transition ease-in">
                        <h2 className="text-md font-semibold">BACK-END</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
