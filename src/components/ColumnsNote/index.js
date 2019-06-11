import React from 'react';
import { Header } from './ColumnsNote.style';
import TwoColumnsLayout from '../TwoColumnsLayout';

const ColumnsNote = ({ header, ...props }) => {
  return (
    <section>
      <TwoColumnsLayout
        header={ <Header>{ header }</Header> }
        { ...props }
      />
    </section>
  );
};

export default ColumnsNote;
