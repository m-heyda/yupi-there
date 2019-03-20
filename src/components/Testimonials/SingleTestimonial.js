import React from 'react';
import {
  TestimonialBox,
  TestimonialIcon,
  TestimonialContent,
  TestimonialAuthor,
} from './Testimonials.style';

const SingleTestimonial = ({ author, children }) => {
  return (
    <TestimonialBox>
      <TestimonialIcon />

      <TestimonialContent>{children}</TestimonialContent>
      <TestimonialAuthor>{author}</TestimonialAuthor>
    </TestimonialBox>
  );
};

export default SingleTestimonial;
