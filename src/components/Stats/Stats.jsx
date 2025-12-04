import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { id: 1, label: "Games Released", value: 120 },
    { id: 2, label: "Active Players", value: 5000 },
    { id: 3, label: "Awards Won", value: 15 },
  ];

  return (
    <section className="py-16 bg-[#1e003e] text-white text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {stats.map(stat => (
          <div key={stat.id}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold text-[#ffcc00]"
            >
              {stat.value}+
            </motion.h3>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
