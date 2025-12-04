import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "Alex", text: "Amazing gameplay and graphics!" },
    { id: 2, name: "Mira", text: "One of the best gaming studios out there." },
    { id: 3, name: "Jordan", text: "Smooth performance and addictive games!" },
    { id: 4, name: "Sam", text: "Creative ideas turned into brilliant games." },
    { id: 5, name: "Lena", text: "User-friendly interface and amazing graphics!" },
    { id: 6, name: "Chris", text: "I can’t stop playing their games!" },
    { id: 7, name: "Nina", text: "Top-notch development and support." },
  ];

  return (
    <section className="py-16 bg-[#0b0015] text-white">
      <h2 className="text-center text-4xl font-bold mb-10">
        What <span className="text-[#ffcc00]">Gamers</span> Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="max-w-6xl mx-auto px-4"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-[#2b005a] p-6 rounded-lg text-center shadow-lg transform transition-all hover:animate-vibrate">
              <p className="text-sm italic mb-3">“{review.text}”</p>
              <h4 className="text-md font-semibold">{review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0px, 0px); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(-1px, -1px); }
            60% { transform: translate(1px, 1px); }
            80% { transform: translate(1px, -1px); }
            100% { transform: translate(0px, 0px); }
          }
          .hover\\:animate-vibrate:hover {
            animation: vibrate 0.2s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
