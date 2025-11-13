
const projects = [
    { title: "SaaS Dashboard", tag: "React / Tailwind" },
    { title: "Marketing Site", tag: "Next.js / SEO" },
    { title: "Shop UI", tag: "React / Headless" },
    { title: "Landing Page", tag: "Tailwind / Animations" },
    { title: "Docs Theme", tag: "MDX / Themeable" },
    { title: "Email Templates", tag: "Responsive / MJML" },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="bg-gray-900 text-white">
            <div className="mx-auto max-w-4/5 px-6 py-16">
                <h3 className="text-2xl md:text-5xl font-bold">Recent Work</h3>
                <p className="mt-2 text-gray-400">A few UI projects we’ve shipped.</p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <div key={p} className="rounded-xl border border-white/10 bg-gray-950 p-5 hover:border-white/20 transition">
                            <div className="relative h-36 rounded-2xl bg-linear-to-br from-gray-800 to-gray-700 border border-white/10 shadow-lg overflow-hidden">
                                <div className="absolute -top-10 -left-10 h-30 w-30 rounded-full bg-orange-500/20 blur-2xl" />
                                <div className="absolute -bottom-10 -right-10 h-30 w-30 rounded-full bg-purple-500/20 blur-2xl" />
                                <div className="absolute inset-0 grid place-items-center text-white/70 text-sm">
                                    Portfolio Image PlaceHolder
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <h4 className="font-semibold">{p.title}</h4>
                                <span className="text-xs text-gray-400">{p.tag}</span>
                            </div>
                            <a href="#" className="mt-3 inline-block text-sm text-orange-400 hover:underline">View project →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio