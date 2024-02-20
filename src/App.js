import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import Text from './Components/Text/Text';
import { useState } from 'react';
import Frameworks from './Components/Frameworks/Frameworks';
import Button from './Components/Button/Button';
import { info } from './data/info';


function App() {
  const [count, setCount] = useState(0);
  console.log('rendering App.js...');

  const fn = () => {
    console.log('count', count);
    setCount(count + 1);
  }

  const [index, setIndex] = useState(0);


  const nextFn = () => {
    if (index === info.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <>
    <div>
      <Counter fn={fn} count={count} />
      <Text text={count} />
    </div>
      <Button fn={nextFn} message={'Next'} />
      <Frameworks info={info[index]} />
    </>
  );
}

export default App;
