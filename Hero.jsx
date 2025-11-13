

const Hero = () => {
    return (
        <section id="home" className="bg-gray-900 text-white">
            <div className="mx-auto grid max-w-4/5 grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Comapny Designs &{" "}
                        <span className="text-orange-400 block">Wordpress Agency</span>
                    </h2>
                    <p className="mt-6 text-gray-400 text-lg">
                        The dataset contains a total of 31,613 paragraphs that are separated by new lines. The content of each paragraph is not specified, but it can be assumed that the paragraphs cover a wide range of topics and subjects.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#portfolio" className="rounded-full bg-orange-500 px-6 py-3 font-medium text-lg text-black hover:bg-orange-400 transition">Explore Works</a>
                        <a href="#services" className="rounded-full border border-white px-6 py-3 text-lg font-medium hover:bg-white hover:text-black transition">Our Services</a>
                    </div>
                </div>

                <div className="relative h-full rounded-2xl bg-linear-to-br from-gray-800 to-gray-700 border border-white/10 shadow-lg overflow-hidden">
                    <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-orange-500/20 blur-2xl" />
                    <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />
                    <div className="absolute inset-0 grid place-items-center text-white/70 text-sm">
                        Hero Image Placeholder
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero