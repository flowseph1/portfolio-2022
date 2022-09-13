function Header() {
    return (
        <div className="h-16 flex justify-between items-center w-[60em] mx-auto">
            <div className="">
                <p className="font-bold text-xl font-autography">Jose Miguel Acosta Carias</p>
            </div>
            <div></div>
            <nav className="flex px-5 space-x-5 text-sm text-zinc-500  items-center">
                <div className="cursor-pointer hover:text-zinc-800 transition">Home</div>
                <div className="cursor-pointer hover:text-zinc-800 transition">Skills</div>
                <div className="cursor-pointer hover:text-zinc-800 transition">Projects</div>
                <div className="boton2 text-xs hover:text-zinc-800 transition">Contact</div>
            </nav>
        </div>
    );
}

export default Header;
