import React from 'react';

function Skills() {
    return (
        <div className="group w-[60em] mx-auto py-5">
            <div className="flex flex-col mb-10 w-fit ">
                <h1 className="font-newake text-4xl">SKILLS</h1>
                <div className="h-1 w-3/5 bg-blue-700 group-hover:w-full transition-all delay-75 ease-in-out" />
            </div>
            <div>
                <div className="bg-white rounded-md hover:shadow-md p-2 w-28 h-28">
                    <h2 className="text-md">FRONT-END</h2>
                </div>
            </div>
        </div>
    );
}

export default Skills;
