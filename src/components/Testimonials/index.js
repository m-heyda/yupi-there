import React from 'react';
import Typography from '../Typography';
import SingleTestimonial from './SingleTestimonial';
import { Wrapper, Container, TestimonialsWrapper } from './Testimonials.style';

const Testimonials = ({ clients }) => {
  return (
    <Wrapper>
      <Container>
        <Typography
          align='left'
          component='h3'
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
