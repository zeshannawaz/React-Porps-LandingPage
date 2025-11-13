

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="mx-auto flex max-w-4/5 items-center justify-between pt-4">

                <div>
                    <h1 className="text-5xl font-bold bg-linear-to-r from-purple-500 via-yellow-500 to-orange-300 text-transparent bg-clip-text">COMPANY</h1>
                </div>

                <div>
                    <nav className="flex items-center gap-10 text-sm text-gray-300">
                        <a href="#home" className="hover:text-orange-400 transition text-xl font-medium">Home</a>
                        <a href="#about" className="hover:text-orange-400 transition text-xl font-medium">About</a>
                        <a href="#portfolio" className="hover:text-orange-400 transition text-xl font-medium">Portfolio</a>
                        <a href="#blog" className="hover:text-orange-400 transition text-xl font-medium">Blog</a>
                        <a href="#contact" className="hover:text-orange-400 transition text-xl font-medium">Contact</a>
                    </nav>
                </div>

                <div>
                    <button className="rounded-full bg-orange-500 px-10 py-3 text-xl font-semibold text-black cursor-pointer hover:bg-orange-400 transition">
                        Let’s Talk
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header