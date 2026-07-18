

interface Client {
  id: number;
  src: string;
  alt: string;
}

const clients: Client[] = [
  { id: 1, src: "https://ahaanmedia.com/ahaanwebsite/clients/1.webp", alt: "EKYAA" },
  { id: 2, src: "https://ahaanmedia.com/ahaanwebsite/clients/2.webp", alt: "LOGIX" },
  { id: 3, src: "https://ahaanmedia.com/ahaanwebsite/clients/3.webp", alt: "Fs" },
  { id: 4, src: "https://ahaanmedia.com/ahaanwebsite/clients/4.webp", alt: "Helli" },
  { id: 5, src: "https://ahaanmedia.com/ahaanwebsite/clients/5.webp", alt: "Jazzyln Nolen" },
  { id: 6, src: "https://ahaanmedia.com/ahaanwebsite/clients/6.webp", alt: "NextDoor Urgent Care" },
  { id: 7, src: "https://ahaanmedia.com/ahaanwebsite/clients/8.webp", alt: "Finanza Ally" },
  { id: 8, src: "https://ahaanmedia.com/ahaanwebsite/clients/7.webp", alt: "Johat Enterprises" },
  { id: 9, src: "https://ahaanmedia.com/ahaanwebsite/clients/9.webp", alt: "psitpops" },
  { id: 10, src: "https://ahaanmedia.com/ahaanwebsite/clients/10.jpg", alt: "johat trust" },
  { id: 11, src: "https://ahaanmedia.com/ahaanwebsite/clients/11.webp", alt: "Orion Labs" },
  { id: 12, src: "https://ahaanmedia.com/ahaanwebsite/clients/12.webp", alt: "Crestline Group" },
];

export const OurClients = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1600px] px-6">
        
        {/* Simple Header */}
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
            Our Clients
          </h2>
          <p className="lg:text-base text-sm px-4 sm:px-8 mt-3 text-[#161616] leading-7  mx-auto mb-8">
            From strategy and planning to development, testing, and deployment,
            we follow a structured process that ensures every project is
            delivered with quality, efficiency, and measurable business results.
          </p>
        </div>

        {/* Clean Logo Grid - 4 in a row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex h-24 w-full items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};