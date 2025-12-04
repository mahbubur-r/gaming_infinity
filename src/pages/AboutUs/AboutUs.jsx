import { motion } from "framer-motion";
import { FaGamepad, FaRocket, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  const team = [
    { id: 1, name: "Alex", role: "Game Designer", img: "/team2.jpg" },
    { id: 2, name: "Mira", role: "Lead Developer", img: "/team1.jpg" },
    { id: 3, name: "Jordan", role: "UI/UX Designer", img: "/team3.jpg" },
  ];

  const values = [
    { id: 1, icon: <FaGamepad className="text-4xl text-[#ffcc00]" />, title: "Innovation", desc: "We push the boundaries of gaming to create immersive experiences." },
    { id: 2, icon: <FaRocket className="text-4xl text-[#ffcc00]" />, title: "Performance", desc: "Our games run smoothly across devices with top-notch optimization." },
    { id: 3, icon: <FaUsers className="text-4xl text-[#ffcc00]" />, title: "Community", desc: "We listen to our players and build experiences they love." },
  ];

  return (
    <div className="bg-[#0b0015] text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e003e] via-[#4a0b74] to-[#b413e1] py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          About <span className="text-[#ffcc00]">Gaming Infinity</span>
        </motion.h1>
        <p className="text-gray-200 mt-4 max-w-3xl mx-auto text-lg md:text-xl">
          We craft unforgettable digital gaming experiences. Our mission is to combine creativity, technology, and passion to deliver games that captivate and inspire.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-[#ffcc00]">Mission & Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(value => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#2b005a] p-8 rounded-xl text-center shadow-lg hover:scale-105 transition"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#1e003e]">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet the <span className="text-[#ffcc00]">Team</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {team.map(member => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#2b005a] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-[#4a0b74] to-[#b413e1] px-4">
        <h2 className="text-4xl font-bold mb-4">Join the <span className="text-[#ffcc00]">Adventure</span></h2>
        <p className="text-gray-200 mb-6 max-w-xl mx-auto">Explore our games and become part of our growing gaming community.</p>
        <button className="px-6 py-3 bg-[#ffcc00] text-[#1e003e] rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Explore Games
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
