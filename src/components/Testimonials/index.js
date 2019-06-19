import React from 'react';

import Typography from '../Typography';
import SingleTestimonial from './SingleTestimonial';
import { Wrapper, Container, TestimonialsWrapper, Background } from './Testimonials.style';

import shapesImage from '../../assets/testimonialsBg.svg';

const Testimonials = ({ clients }) => {
  return (
    <Wrapper>
      <Container>
        <Background src={ shapesImage } />
        <Typography
          align='left'
          component='p'
          headingVariant='heading'
          maxWidth='380px'
        >
          Dołącz do grona zadowolonych klientów Yupi-there
        </Typography>

        <TestimonialsWrapper>
          { clients.map(client => (
            <SingleTestimonial author={ client.author } key={ client.author }>
              { client.content }
            </SingleTestimonial>
          ))}
        </TestimonialsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
