const News = () => {
  const articles = [
    { id: 1, title: "New Game Release: Speed Racers", img: "/game4.jpg" },
    { id: 2, title: "Top 10 Gaming Tips for Beginners", img: "/game3.jpg" },
    { id: 3, title: "Behind the Scenes: Battle Arena", img: "/game2.jpg" },
  ];

  return (
    <section className="py-16 bg-[#0b0015] text-white">
      <h2 className="text-center text-4xl font-bold mb-10">
        Latest <span className="text-[#ffcc00]">News</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {articles.map(article => (
          <div
            key={article.id}
            className="bg-[#2b005a] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={article.img} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
