import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import Container from '../components/layouts/Container'

const Contact = () => {
  return (
    <section className="pt-20 font-pop">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left info card */}
          <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100 lg:col-span-1">
            <div className="flex flex-col items-center text-center gap-3 px-6 py-6">
              <MapPin className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <p className="font-normal text-[16px] text-[#333333] leading-relaxed">
                2715 Ash Dr. San Jose, South<br />Dokota 83475
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 px-6 py-6">
              <Mail className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <p className="font-normal text-[16px] text-[#333333] leading-relaxed">
                Proxy@gmail.com<br />Help.proxy@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 px-6 py-6">
              <Phone className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <p className="font-normal text-[16px] text-[#333333] leading-relaxed">
                (219) 555-0114<br />(164) 333-0487
              </p>
            </div>
          </div>

          {/* Right form card */}
          <div className="bg-white rounded-2xl shadow-sm p-8 lg:col-span-2">
            <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-2">
              Just Say Hello!
            </h3>
            <p className="font-normal text-sm text-[#808080] max-w-md mb-6 leading-relaxed">
              Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue="Template Cookie"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#666666] focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue="zakirsoft@gmail.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#666666] focus:outline-none focus:border-primary"
                />
              </div>

              <input
                type="text"
                defaultValue="Hello!"
                className="w-full rounded-lg border border-primary px-4 py-3 text-sm text-gray-700 focus:outline-none"
              />

              <textarea
                placeholder="Subjects"
                rows={4}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-400 resize-none focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                className="bg-primary text-white text-[16px] font-semibold rounded-full px-8 py-3 cursor-pointer hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* Map */}
      <div className="w-full h-[420px] mt-20 bg-gry">
        <iframe
          title="Location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.012689575391!2d90.37993967479169!3d23.74174778910947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b067dbaf61%3A0x75c5b9a41c0b3c4a!2sCreative%20IT%20Institute%20(Campus%202)!5e1!3m2!1sen!2sbd!4v1785697997892!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default Contact