'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const HomeSessionVideo = () => {
  const t = useTranslations('About.two');
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      src: 'https://s2-111386.kwimgs.com/bs2/mmu-aiplatform-temp/kling/0605/first-1.mp4',
      description:
        'A royal angelfish with yellow and blue stripes swimming in an underwater rocky habitat',
    },
    {
      src: 'https://s2-111386.kwimgs.com/bs2/mmu-aiplatform-temp/kling/0605/first-2.mp4',
      description:
        'A hand pouring milk from a steel milk frothing pitcher into a cup of coffee on a table, with a blurred kitchen background',
    },
    {
      src: 'https://s2-111386.kwimgs.com/bs2/mmu-aiplatform-temp/kling/0605/first-3.mp4',
      description:
        'Two flowers slowly blooming against a black background, showcasing delicate petals and stamens',
    },
    {
      src: 'https://s2-111386.kwimgs.com/bs2/mmu-aiplatform-temp/kling/0605/first-4.mp4',
      description: 'A giant panda playing guitar by a lake',
    },
    {
      src: 'https://s2-111386.kwimgs.com/bs2/mmu-aiplatform-temp/kling/0605/first-5.mp4',
      description:
        'A car driving on the road at dusk, with a stunning sunset and serene scenery reflected in the rearview mirror',
    },
    {
      src: 'https://s2-111386.kwimgs.com/bs2/mmu-aiplatform-temp/kling/0605/first-6.mp4',
      description:
        "A close-up shot of a bright blue parrot's feathers sparkling in the light, showcasing its unique plumage and vibrant colors",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container relative">
        <div className="flex justify-center items-center">
          <button onClick={handlePrev} className="absolute left-0 p-2 bg-gray-200 rounded-full">
            &lt;
          </button>
          <div className="flex overflow-hidden w-full justify-center">
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 flex-shrink-0 flex-grow-0 basis-full pl-4"
            >
              <div className="p-1">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    {' '}
                    {/* 16:9 aspect ratio */}
                    <video
                      preload="auto"
                      controls
                      src={videos[currentIndex].src}
                      className="absolute top-0 left-0 w-full h-full object-contain"
                    ></video>
                  </div>
                  <span className="font-mono text-lg leading-7 font-semibold text-center">
                    {videos[currentIndex].description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleNext} className="absolute right-0 p-2 bg-gray-200 rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSessionVideo;
