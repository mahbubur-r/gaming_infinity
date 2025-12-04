import { FaGamepad, FaMobileAlt, FaRocket } from "react-icons/fa";

const Services = () => {
  const items = [
    {
      icon: <FaGamepad className="text-4xl text-[#ffcc00]" />,
      title: "Game Development",
      desc: "We build immersive mobile & PC gaming experiences."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#ffcc00]" />,
      title: "App Design",
      desc: "Smooth UI/UX crafted for gamers and creators."
    },
    {
      icon: <FaRocket className="text-4xl text-[#ffcc00]" />,
      title: "Performance Optimization",
      desc: "Boosting speed, stability, and performance."
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#1e003e] to-[#4a0b74] text-white">
      <h2 className="text-center text-4xl font-bold mb-12">
        Our <span className="text-[#ffcc00]">Services</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {items.map((item, index) => (
          <div key={index} className="p-8 rounded-xl bg-[#2b005a] shadow-lg hover:scale-105 transition">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
