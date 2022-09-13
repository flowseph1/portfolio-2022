import React from 'react';
import Red from './Red';

const redes = [
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-acosta-8214a5202/', icono: 'FaLinkedin' },
    { nombre: 'Github', url: 'https://github.com/flowseph1', icono: 'AiFillGithub' },
];

function Redes() {
    return (
        <div className="space-y-1">
            {redes.map(red => (
                <Red key={red.nombre} nombre={red.nombre} url={red.url} icono={red.icono} />
            ))}
        </div>
    );
}

export default Redes;
