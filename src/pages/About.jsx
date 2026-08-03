import React from 'react'
import Container from '../components/layouts/Container'
import { Leaf, Headset, MessageCircle, ShieldCheck, Truck, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import FoodOne from '../assets/images/foodone.webp'
import FoodTwo from '../assets/images/foodtwo.webp'
import DeliveryMan from '../assets/images/deliveryman.webp'
import TeamOne from '../assets/images/teamone.webp'
import TeamTwo from '../assets/images/teamtwo.webp'
import TeamThree from '../assets/images/teamthree.webp'
import TeamFour from '../assets/images/teamfour.webp'

const features = [
  { icon: Leaf, title: '100% Organic Food', desc: '100% healthy & fresh food' },
  { icon: Headset, title: 'Direct Support 24/7', desc: "World's choose for connect" },
  { icon: MessageCircle, title: 'Customer Feedback', desc: 'Get happy customer' },
  { icon: ShieldCheck, title: '100% Secure Payment', desc: 'We ensure your identity is save' },
  { icon: Truck, title: 'Free Shipping', desc: 'Free shipping with discount' },
  { icon: Leaf, title: '100% Organic Food', desc: '100% healthy & fresh food' },
]

const checklist = [
  'Sem in vitae pellentesque nunc',
  'Aussi id ac commodo aliquet auto tellus tor quis at',
  'Maecenas ut nunc fringilla vel varius',
]

const team = [
  { img: TeamOne, name: 'Jenny Wilson', role: 'Ceo & Founder' },
  { img: TeamFour, name: 'Jane Cooper', role: 'Worker' },
  { img: TeamThree, name: 'Cody Fisher', role: 'Security Guard' },
  { img: TeamTwo, name: 'Robert Fox', role: 'Senior Farm Manager' },
]

const About = () => {
  return (
    <section className="font-pop text-[#1A1A1A]">

      {/* Hero */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <h1 className="text-[56px] font-semibold leading-tight mb-5 max-w-xl">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-[#666666] text-lg leading-normal max-w-[555px]">
              Morbi pellentesque ligula in nunc varius sagittis. Proin dui nisl,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet ultricies vel tellus ut
              accumsan. Donec a eros non massa vulputate ornare, vivamus ornare
              commodo ante, ut commodo felis congue vitae.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={FoodOne} alt="Organic farmer" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </Container>

      {/* Full-bleed image + features */}
      <div className="bg-gry">
        <div className="grid md:grid-cols-2 items-center">
          <div className="h-72 md:h-full">
            <img src={FoodTwo} alt="Organic farmer in field" className="w-full h-full object-cover" />
          </div>

          <div className="px-6 md:px-12 py-14">
            <h2 className="text-hsize font-semibold mb-4 leading-tight">
              100% Trusted Organic Food Store
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              Pellentesque a ante suscipit, luctus tellus vel eget arcu. Nulla et
              rhoncus dui. Duis non diam eget est luctus tincidunt a mi. Nulla
              sem convallis ut lectus tincidunt bibendum.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold">{title}</h4>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* We Delivered, You Enjoy Your Order */}
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h2 className="text-[48px] font-semibold mb-4 leading-tight max-w-md">
              We Delivered, You Enjoy Your Order.
            </h2>
            <p className="text-[#666666] text-[16px] leading-relaxed mb-6 max-w-md">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
            </p>
            <ul className="space-y-3 mb-8">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={12} className="text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-primary text-white text-sm font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition">
              Shop Now <ArrowRight size={16} />
            </button>
          </div>
          <div>
            <img src={DeliveryMan} alt="Delivery man" className="w-full" />
          </div>
        </div>
      </Container>

      {/* Our Awesome Team */}
      <div className="bg-gry py-16">
        <Container>
          <div className="text-center max-w-lg mx-auto mb-12">
            <h2 className="text-hsize font-semibold mb-3">Our Awesome Team</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pellentesque a ante suscipit, luctus tellus vel eget arcu. Nulla
              sem convallis ut lectus tincidunt bibendum.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-primary hover:text-white transition">
              <ChevronLeft size={18} />
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
              {team.map(({ img, name, role }, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img src={img} alt={name} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h4 className="text-sm font-semibold">{name}</h4>
                    <p className="text-xs text-gray-400">{role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-primary hover:text-white transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </Container>
      </div>

    </section>
  )
}

export default About