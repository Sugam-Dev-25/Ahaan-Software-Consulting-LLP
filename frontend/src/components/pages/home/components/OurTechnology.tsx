

// 1. Defined type safety for the technology items
interface Technology {
    name: string;
    image: string;
}

const technologies: Technology[] = [
    { name: "Figma", image: "https://ahaanmedia.com/ahaanwebsite/technology/Figma.webp" },
    { name: "Framer", image: "https://ahaanmedia.com/ahaanwebsite/technology/Framer.webp" },
    { name: "Photoshop", image: "https://ahaanmedia.com/ahaanwebsite/technology/Photoshop.webp" },
    { name: "Wix", image: "https://ahaanmedia.com/ahaanwebsite/technology/Wix.webp" },
    { name: "React JS", image: "https://ahaanmedia.com/ahaanwebsite/technology/React.webp" },
    { name: "Next JS", image: "https://ahaanmedia.com/ahaanwebsite/technology/Next.webp" },
    { name: "Node JS", image: "https://ahaanmedia.com/ahaanwebsite/technology/Node.webp" },
    { name: "MongoDB", image: "https://ahaanmedia.com/ahaanwebsite/technology/Mongodb.webp" },
    { name: "Python", image: "https://ahaanmedia.com/ahaanwebsite/technology/Python.webp" },
    { name: "MySQL", image: "https://ahaanmedia.com/ahaanwebsite/technology/Mysql.webp" },
    { name: "WordPress", image: "https://ahaanmedia.com/ahaanwebsite/technology/Wordpress.webp" },
    { name: "Shopify", image: "https://ahaanmedia.com/ahaanwebsite/technology/Shopify.webp" },
    { name: "Webflow", image: "https://ahaanmedia.com/ahaanwebsite/technology/Webflow.webp" },
    { name: "PHP", image: "https://ahaanmedia.com/ahaanwebsite/technology/Php.webp" },
    { name: "Odoo", image: "https://ahaanmedia.com/ahaanwebsite/technology/Odoo.webp" },
    { name: "Tailwind", image: "https://ahaanmedia.com/ahaanwebsite/technology/Tailwind.webp" },
    { name: "JavaScript", image: "https://ahaanmedia.com/ahaanwebsite/technology/JS.webp" },
    { name: "TypeScript", image: "https://ahaanmedia.com/ahaanwebsite/technology/TS.webp" },
];

export const OurTechnology = () => {
    return (
        <section className="">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mt-5 text-left max-w-3xl">
                    <h6 className="text-[25px] font-semibold text-black leading-10 flex items-center gap-2">
                        Technology Use
                        <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-[#f9ae00] via-[#3d2f0c] to-[#d49500] animate-[gradientFlow_4s_ease-in-out_infinite] bg-[length:300%]" />
                    </h6>

                    {/* Custom text gradient animation matching your original CSS */}
                    <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9ae00] via-[#3d2f0c] to-[#d49500] bg-[length:300%] animate-[gradientFlow_4s_ease-in-out_infinite] leading-[1.2] sm:leading-[70px] mt-2">
                        Our Technology Use
                    </h2>

                    <p className="mt-4 text-gray-600 text-base leading-relaxed">
                        The success of our services depends on a perfectly laid-out process
                        from the beginning to the end. And, we put YOU at the centre of
                        everything we do, turning our promises into reality! We specialize
                        in transforming business operations through the power of human and
                        tech collaboration.
                    </p>
                </div>

                {/* Technology Responsive Grid */}
                <div className="mt-10 mb-10">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        {technologies.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center inline-flex gap-1 lg:gap-2.5 p-1.5 md:p-2 lg:p-2.5 bg-white border border-[#cbcbcb] rounded-lg cursor-pointer  "
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] xl:w-[34px] xl:h-[34px] object-contain flex-shrink-0"
                                />
                                {/* Removed 'truncate' and 'no-wrap' so the text sets the width naturally */}
                                <span className="text-[13px] sm:text-[14px] xl:text-[16px] font-medium text-black whitespace-nowrap leading-none">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

