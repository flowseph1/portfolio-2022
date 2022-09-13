import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

interface Props {
    nombre: string;
    url: string;
    icono: string;
}

function Red({ nombre, url, icono }: Props) {
    const getIcon = (icono: string) => {
        switch (icono) {
            case 'FaLinkedin':
                return <FaLinkedin className="h-6 w-6 " />;

            case 'AiFillGithub':
                return <AiFillGithub className="h-6 w-6 " />;

            default:
                break;
        }
    };

    return (
        <div className=" text-gray-400 rounded-full hover:bg-gray-200 hover:text-blue-900 p-1 transition cursor-pointer relative z-0 group">
            <div>{getIcon(icono)}</div>
            <div className="bg-gray-100 rounded-full absolute inset-0 -z-10 "></div>
            <div className="bg-gradient-to-r rounded-full from-pink-500 to-indigo-500 absolute -inset-[3px] -z-50 group-hover:animate-spin group-hover:opacity-100 opacity-0 transition-all"></div>
        </div>
    );
}

export default Red;
