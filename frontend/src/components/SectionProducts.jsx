const PRODUCTS = [
  {
    name: "Nexus Buffers",
    image: "/images/products/buffer.png",
  },
  {
    name: "Nexus Shower Water Heaters",
    image: "/images/products/shower_water_heater.png",
  },
  {
    name: "Nexus Combi Boilers (Buffer Shower)",
    image: "/images/products/combi_boilers.png",
  },
  {
    name: "Electric Heating Elements",
    image: "/images/products/electric_heating.png",
  },
];

export default function SectionProducts() {
  return (
    <section className="w-full bg-stone-100 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="text-3xl font-bold text-stone-900 mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Our Products
        </h2>
        <p className="text-stone-500 text-base">All storage options for HVAC systems</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Oval platform + image */}
            <div className="relative w-full flex items-end justify-center">
              {/* Oval shadow platform */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-stone-300/60 rounded-full blur-md" />
              {/* Product image */}
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 w-64 h-64 object-contain transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>

            {/* Label */}
            <p className="mt86 text-center text-sm text-stone-700 font-medium leading-snug max-w-[140px]">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}