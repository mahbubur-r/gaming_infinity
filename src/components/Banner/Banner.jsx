import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { motion } from "framer-motion";

const Banner = () => {

    const slides = [
        { id: 1, image: '/game1.jpg', title: 'Battle Arena' },
        { id: 2, image: '/game2.jpg', title: 'Speed Racers' },
        { id: 3, image: '/game3.jpg', title: 'Mystic Quest' },
    ];
    return (
        <div>
            <div>
                <section class="text-center py-16 bg-gradient-to-r from-[#1e003e] via-[#4a0b74] to-[#b413e1] text-white">

                    <h1 class="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 hidden md:block">
                        <span class="text-[#ffcc00]">GAMING INFINITY</span> — Crafting Digital Magic
                    </h1>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className="text-5xl md:text-7xl font-bold md:mt-5">
                        Powering{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                            Gaming
                        </span>{" "}
                        Experiences
                    </motion.h2>
                    <p class=" mt-5 max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
                        We create innovative gaming apps that make life simpler, smarter, and way more exciting.
                        Turning your boldest ideas into unforgettable digital experiences.
                    </p>
                    <Link to='/games'>
                        <button class="mt-6 px-6 py-3 bg-[#ffcc00] text-[#1e003e] font-semibold rounded-full shadow-lg hover:scale-105 transition">
                            Explore Our Games</button>
                    </Link>
                </section>

            </div>
            <div className="w-full max-w-6xl mx-auto mt-8 rounded-2xl overflow-hidden my-10">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="md:h-[60vh] w-[60vw] h-[400px] rounded-2xl"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="relative w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                                        {slide.title}
                                    </h2>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default Banner;