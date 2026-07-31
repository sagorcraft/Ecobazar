import React from 'react'
import Container from '../components/layouts/Container'
import ErrorImg from '../assets/images/error.webp'
import { Link } from 'react-router'

const Error = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full max-w-[550px]">
            <img src={ErrorImg} alt="404 Error" />
          </div>

          {/* Copy */}
          <h2 className="font-pop text-[40px] font-semibold text-[#1A1A1A] mt-8">
            Oops! page not found
          </h2>
          <p className="font-pop font-normal text-[]16px text-[#808080] mt-5 max-w-lg">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
          </p>

          {/* CTA */}
          <Link to="/">
            <button className="font-pop text-[14px] mt-6 bg-primary text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Error