import React, { useState } from 'react'
import Container from '../components/layouts/Container'
import FaqImage from '../assets/images/faq.webp'

const faqItems = [
  {
    question: 'In elementum est a ante sodales iaculis.',
    answer:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
  {
    question: 'Etiam lobortis massa eu nibh tempor elementum.',
    answer:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
  {
    question: 'In elementum est a ante sodales iaculis.',
    answer:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
  {
    question: 'Aenean quis quam nec lacus semper dignissim.',
    answer:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
  {
    question: 'Nulla tincidunt eros id tempus accumsan.',
    answer:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18">
          {/* Left: heading + accordion */}
          <div className="w-full max-w-[648px]">
            <h2 className="font-pop text-[32px] font-bold text-[#1A1A1A] mb-8 max-w-sm">
              Welcome, Let’s Talk About Our Ecobazar
            </h2>

            <div className="flex flex-col gap-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={index}
                    className={`rounded-md border transition-colors duration-200 ${
                      isOpen ? 'border-primary bg-white' : 'border-gry bg-gry'
                    }`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between gap-y-5 px-4 py-4 text-center"
                    >
                      <span
                        className={`font-pop font-medium text-[16px] text-[#1A1A1A] ${
                          isOpen ? 'text-primary' : 'text-black'
                        }`}
                      >
                        {item.question}
                      </span>

                      {/* === plus icon design=== */}
                      <span
                        className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-sm leading-none ${
                          isOpen ? 'text-black bg-gry' : 'bg-white text-black'
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && item.answer && (
                      <div className="border-t border-primary px-4 py-4">
                        <p className="font-pop font-normal text-sm text-[#666666] max-w-[553px]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: faq image */}
          <div className="flex justify-center items-end h-full">
            <img
              src={FaqImage}
              alt="Farmer holding a basket of fresh vegetables"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Faq