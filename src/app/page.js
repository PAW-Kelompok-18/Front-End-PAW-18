'use client';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggedChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'smoth' } },
  };

  const image = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'smoth' } },
  };

  return (
    <main className="bg-black-A text-white-A lg:py-0 font-montserrat">
      <section className="relative h-screen flex flex-col items-start justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          duration={0.9}
          className="z-10 text-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl lg:text-8xl font-bold font-frank md:px-10 px-10"
          >
            Let Your Soul Soar
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-2xl md:text-4xl lg:text-8xl  md:text-8xl font-bold mt-4 font-frank md:px-10 px-10"
          >
            with NIKI's Sound
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg md:text-xl mt-8 px-4 md:px-16 lg:px-40 lg:text-xl"
          >
            Join NIKI for a night of soulful melodies and heartfelt lyrics that
            will move you. Let the music connect and inspire in an unforgettable
            experience.
          </motion.p>
        </motion.div>
      </section>

      {/* First Image After Main Section */}
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, type: 'keyframes' }}
        className="relative w-full h-[500px] mt-[-100px]"
      >
        <motion.img
          variants={image}
          src="/assets/landing/niki1.png"
          alt="NIKI"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </motion.div>

      {/* Nicole's Tour Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 pt-[350px]">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 font-frank">
          NICOLE's TOUR
        </h2>

        {/* Tour Event Grid with Description Under Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tour Event 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[600px]">
              <div className="relative w-full pb-[50%]">
                <Image
                  src="/assets/landing/niki2.png"
                  alt="Nicole Tour"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="text-center lg:text-start mt-4">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 font-frank">
                  Nicole Tour
                </h3>
                <p className="text-gray-300 mb-2 text-sm">8 September 2022</p>
                <p className="text-sm lg:text-lg text-gray-400">
                  NIKI kicked off The Nicole Tour in Vancouver with a vibrant,
                  energetic performance at Malkin Bowl. As her first headlining
                  tour, the show celebrated the release of her album Nicole,
                  with heartfelt connections and captivating music filling the
                  night.
                </p>
              </div>
            </div>
          </div>

          {/* Tour Event 2 */}
          <div className="flex flex-col items-center justify-end lg:mt-[200px]">
            <div className="w-full max-w-[600px]">
              <div className="relative w-full pb-[50%]">
                <Image
                  src="/assets/landing/niki3.png"
                  alt="Nicole Tour Jakarta"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="text-center lg:text-end mt-4">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 font-frank">
                  Nicole Tour Jakarta
                </h3>
                <p className="text-gray-300 mb-2 text-sm">26 September 2023</p>
                <p className="text-sm lg:text-lg text-gray-400">
                  NIKI dazzled 8,000 fans at her Nicole Live in Jakarta 2023
                  concert at JIEXPO with a mix of hits like "Before" and
                  "Selene," and personal moments like "Anaheim."
                </p>
              </div>
            </div>
          </div>

          {/* Tour Event 3 */}
          <div className="flex flex-col items-center justify-start lg:mt-[-100px]">
            <div className="w-full max-w-[600px]">
              <div className="relative w-full pb-[50%]">
                <Image
                  src="/assets/landing/niki4.png"
                  alt="Nicole Tour"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="text-center lg:text-start mt-4">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 font-frank">
                  Nicole Tour
                </h3>
                <p className="text-gray-300 mb-2 text-sm">8 September 2022</p>
                <p className="text-sm lg:text-lg text-gray-400">
                  NIKI kicked off The Nicole Tour in Vancouver with a vibrant,
                  energetic performance at Malkin Bowl. As her first headlining
                  tour, the show celebrated the release of her album Nicole,
                  with heartfelt connections and captivating music filling the
                  night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16 lg:mx-8 flex flex-col items-center justify-center opacity-100">
        <div className="z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white-A font-frank">
            GET YOURS RIGHT NOW
          </h2>
          <button
            className="border-4 border-white-A text-white-A hover:text-black-A font-bold py-4 px-8 mt-8 hover:bg-white-A transition duration-300"
            onClick={() => router.push('/ticket')}
          >
            BUY NOW
          </button>
        </div>
        <Image
          src="/assets/landing/niki5.jpg"
          alt="NIKI"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-center"
        />
      </section>
    </main>
  );
}
