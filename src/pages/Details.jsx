import React, { useState } from 'react'
import Container from '../components/layouts/Container'
import {
  FiChevronUp,
  FiChevronDown,
  FiStar,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiHeart,
  FiCheckCircle,
  FiPercent,
} from 'react-icons/fi'
import { FaLeaf } from 'react-icons/fa'

const thumbnails = [
  '/assets/img/cabbage-thumb-1.png',
  '/assets/img/cabbage-thumb-2.png',
  '/assets/img/cabbage-thumb-3.png',
  '/assets/img/cabbage-thumb-4.png',
]

const tags = ['Vegetables', 'Healthy', 'Chinese', 'Cabbage', 'Green Cabbage']

const features = [
  '132 g of fresh leaves provides.',
  'Aliquam ac est at augue volutpat elementum.',
  'Quisque nec enim eget sapien molestie.',
  'Proin convallis odio volutpat finibus posuere.',
]

const tabs = ['Descriptions', 'Additional Information', 'Customer Feedback']

const Details = () => {
  const [qty, setQty] = useState(5)
  const [activeTab, setActiveTab] = useState('Descriptions')

  return (
    <section className="font-pop py-10">
      <Container>
        {/* Top: gallery + product info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Gallery */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-3">
              <button className="text-gray-400 hover:text-primary">
                <FiChevronUp size={18} />
              </button>
              {thumbnails.map((src, i) => (
                <div
                  key={i}
                  className={`w-14 h-14 rounded-md border ${
                    i === 0 ? 'border-primary' : 'border-gray-200'
                  } p-1 cursor-pointer`}
                >
                  <img src={src} alt={`thumbnail-${i}`} className="w-full h-full object-contain" />
                </div>
              ))}
              <button className="text-gray-400 hover:text-primary">
                <FiChevronDown size={18} />
              </button>
            </div>

            <div className="flex-1 bg-gry rounded-2xl flex items-center justify-center p-8">
              <img
                src="/assets/img/cabbage-main.png"
                alt="Chinese Cabbage"
                className="max-h-80 object-contain"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-hsize font-semibold text-gray-900">Chinese Cabbage</h1>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                In Stock
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">SKU: 2351954</p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-yellow-400">
                {Array.from({ length: 4 }).map((_, i) => (
                  <FiStar key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
                <FiStar size={16} className="text-gray-300" fill="currentColor" strokeWidth={0} />
              </div>
              <span className="text-sm text-gray-400">4 Review</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-gray-400 line-through text-lg">$48.00</span>
              <span className="text-2xl font-semibold text-gray-900">$17.28</span>
              <span className="flex items-center gap-1 text-xs bg-badgeone/10 text-badgeone px-2 py-1 rounded-full">
                <FiPercent size={12} /> 51% Off
              </span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-gray-400 text-sm">brand</span>
              <FaLeaf size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-800">Yammy</span>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-gray-400 text-sm">Share Item</span>
              {[FiFacebook, FiTwitter, FiInstagram].map((Icon, i) => (
                <button
                  key={i}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-white ${
                    i === 0 ? 'bg-primary' : 'bg-gray-300'
                  }`}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mt-4 max-w-md">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Nulla nibh diam, blandit nec consequat nec, ultrices at
              ipsum. Nulla varius magna a consequat pharetra.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center border border-gray-200 rounded-full px-3 py-2">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-gray-500">
                  <FiMinus size={14} />
                </button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="text-gray-500">
                  <FiPlus size={14} />
                </button>
              </div>

              <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90">
                <FiShoppingBag size={16} /> Add to Cart
              </button>

              <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary">
                <FiHeart size={16} />
              </button>
            </div>

            <div className="mt-6 space-y-1 text-sm">
              <p className="text-gray-400">
                Category: <span className="text-gray-700">Vegetables</span>
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-gray-400">Tag:</span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs ${
                      tag === 'Chinese'
                        ? 'bg-primary text-white'
                        : 'bg-gry text-gray-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mt-12 flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium ${
                activeTab === tab
                  ? 'text-gray-900 border-b-2 border-primary'
                  : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          <div className="lg:col-span-2 text-sm text-gray-400 leading-relaxed space-y-4">
            <p>
              Sed commodo aliquam dui eu porta. Fusce ipsum felis, imperdiet id posuere eu,
              vehicula ut mauris. Maecenas tincidunt ligula a sem vestibulum pharetra.
              Maecenas auctor tortor tellus, nec laoreet nisi porttitor vel. Etiam pharetra
              vulputate leo eu bibendum.
            </p>
            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui sed iaculis,
              metus faucibus fermentum tincidunt, turpis mi viverra velit, pellentesque
              cursus neque et eget nulla. Proin
            </p>

            <ul className="space-y-2 pt-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <FiCheckCircle size={16} className="text-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <p>
              Orci ut diam mattis, hendrerit consequat suspisse at sollicitudin nunc. Nulla
              blandit enim non turpis lobortis dictum.
            </p>
          </div>

          <div className="bg-gry rounded-2xl overflow-hidden">
            <img
              src="/assets/img/promo-farmer.png"
              alt="Fresh vegetables"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex justify-between text-xs">
              <div className="flex items-start gap-2">
                <FiPercent size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">54% Discount</p>
                  <p className="text-gray-400">Save your $64 money with us</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FaLeaf size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">100% Organic</p>
                  <p className="text-gray-400">100% Organic Vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Details