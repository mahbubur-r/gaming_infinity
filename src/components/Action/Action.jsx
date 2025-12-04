import { Link } from "react-router";

const Action = () => (
  <section className="py-16 bg-gradient-to-r from-[#4a0b74] to-[#b413e1] text-white text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Play?</h2>
    <p className="mb-6 text-lg max-w-xl mx-auto">
      Join thousands of gamers and experience the ultimate gaming adventure today.
    </p>
    <Link to="/games">
      <button className="px-6 py-3 bg-[#ffcc00] text-[#1e003e] rounded-full font-semibold shadow-lg hover:scale-105 transition">
        Explore Games
      </button>
    </Link>
  </section>
);

export default Action;
