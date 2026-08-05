import React from 'react';
import victor from '../../src/assets/images/Vector.webp';
import mango from '../../src/assets/images/mango.webp';
import Group from '../../src/assets/images/Group.webp';
import food from '../../src/assets/images/food.webp';
import bookof from '../../src/assets/images/bookoff.webp';
import Group1 from '../../src/assets/images/gseries.webp';
import Container from './layouts/Container';

const logos = [victor, mango, Group, food, bookof, Group1];

const CompanyName = () => {
  return (
    <section className='py-12 border-t border-gray-100 overflow-hidden'>
      <Container>
        <div className='relative w-full overflow-hidden'>
          <div className='inline-flex animate-marquee hover:[animation-play-state:paused]'>
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className='flex items-center justify-center px-20 shrink-0 border-r border-gray-400 h-10'
              >
                <img
                  src={logo}
                  alt='company logo'
                  className='h-8 w-auto object-contain logo-img'
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyName;