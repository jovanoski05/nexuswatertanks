export default function About() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/about/factory.jpg"
              alt="About Us"
              className="w-full h-[420px] object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2">
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">
            Who We Are
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-5 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Bringing fresh ideas to HVAC buffer and water heating solutions
          </h2>
          <p className="text-stone-500 text-base leading-relaxed mb-4">
            Nexus is a new European brand bringing fresh ideas to HVAC buffer and water heating solutions. 
            Our stainless steel tanks are designed for rust-free, hygienic operation and maximum efficiency.
          </p>
          <p className="text-stone-500 text-base leading-relaxed mb-8">
            Why Nexus?<br/>
            ✔ Hygienic & corrosion-free – Duplex (AISI 2205) tanks for shower water heating and heating/cooling applications.<br/>
            ✔ Smart insulation – Prevents condensation and heat loss.<br/>
            ✔ Installer-friendly – Easy-to-connect designs in hanging, standing, vertical, and horizontal versions.<br/>
          </p>
          <p className="text-stone-500 text-base leading-relaxed mb-4">
            As a new brand, we challenge outdated solutions with better, smarter, and more durable products.
          </p>
          <p className="text-stone-500 text-base leading-relaxed mb-4">
           Let’s talk about how Nexus can improve your system!
          </p>

        </div>

      </div>
    </section>
  );
}