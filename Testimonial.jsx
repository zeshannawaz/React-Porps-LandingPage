
const quotes = [
    { name: "Amelia R.", role: "Product Lead", text: "Pixel-perfect delivery and great communication." },
    { name: "Daniel M.", role: "Founder", text: "Performance jumped and the UI looks stunning." },
];

const Testimonial = () => {
    return (
        <section id="testimonials" className="bg-gray-950 text-white">
            <div className="mx-auto max-w-4/5 px-6 py-16">
                <h3 className="text-2xl md:text-5xl font-bold">Client Feedback</h3>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {quotes.map((q) => (
                        <div key={q} className="rounded-xl border border-white/10 bg-gray-900 p-6">
                            <p className="text-gray-300">“{q.text}”</p>
                            <div className="mt-4 text-sm text-gray-400">{q.name} · {q.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial