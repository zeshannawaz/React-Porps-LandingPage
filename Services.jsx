

const items = [
    { title: "Fast & Accessible", desc: "Core Web Vitals friendly builds with a11y baked in." },
    { title: "Modern Stack", desc: "React, Tailwind, TypeScript (optional), best-practice patterns." },
    { title: "Reusable UI", desc: "Clean components and easy-to-scale design systems." },
];


const Services = () => {
    return (
        <section id="services" className="bg-gray-950 text-white">
            <div className="mx-auto max-w-4/5 px-6 py-16">
                <h3 className="text-2xl md:text-5xl font-bold">What We Do</h3>
                <p className="mt-2 text-gray-400">Frontend done right — clean, fast, and maintainable.</p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it) => (
                        <div key={it} className="rounded-xl border border-white/10 bg-gray-900 p-6 hover:border-white/20 transition">
                            <h4 className="text-lg font-semibold text-orange-400">{it.title}</h4>
                            <p className="mt-2 text-gray-400">{it.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services