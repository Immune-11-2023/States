import { useState } from 'react';
import Button from '../Button/Button';

const Counter = ({ fn }) => {
  
  return (
    <>
      <Button fn={fn} message={'+1'}/>
    </>
  );
};

export default Counter;
