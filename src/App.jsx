import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import Button from "./components/Button/Button"
import Counter from "./components/Counter/Counter";
import Logs from "./components/Logs/Logs";
import User from "./components/User/User";

const INITIAL_COUNTER = 0;
const COUNTER_STEP = 1;
const MIN_COUNTER_VALUE = -5;
const MAX_COUNTER_VALUE = 5;
const USER_ACTIONS = {
  MINUS: 'minus',
  PLUS: 'plus',
}

function App() {
  const [counter, setCounter] = useState(INITIAL_COUNTER)
  const [logs, setLogs] = useState([]) 

  function handleClick() {
    alert('clicked')
  }

  function handleMouseOver() {
    console.log('onMouseOver')
  }

  function handleLinkClick(e) {
    e.preventDefault();
    console.log('link clicked')
  }

  function handlePlusBtnClick() {
    const newCounter = counter + COUNTER_STEP;

    const log = {
      id: uuidv4(),
      action: USER_ACTIONS.PLUS,
      prevValue: counter,
      newValue: newCounter,
    }

    setCounter(newCounter)
    setLogs([...logs, log])
  }

  function handleMinusBtnClick() {
    const newCounter = counter - COUNTER_STEP;

    const log = {
      id: uuidv4(),
      action: USER_ACTIONS.MINUS,
      prevValue: counter,
      newValue: newCounter,
    }

    setCounter(newCounter)
    setLogs([...logs, log]);
  }

  function isBtnDisabled(value) {
    return counter === value;
  }

  function isCounterOutLimit() {
    return counter <= MIN_COUNTER_VALUE || counter >= MAX_COUNTER_VALUE;
  }

  return (
    <>
      <div className="container">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <div className="container">
        <a
          onClick={handleLinkClick}
          onMouseOver={handleMouseOver}
          href="https://www.google.com">Ссылка</a>
        <Button
          text='Нажми меня'
          onClick={handleClick}/>
        <div>
          <Counter
            value={counter}
            isDanger={isCounterOutLimit()}/>
          <Button
            text={'-'}
            isDisabled={isBtnDisabled(MIN_COUNTER_VALUE)}
            onClick={handleMinusBtnClick}/>
          <Button
            text={'+'}
            isDisabled={isBtnDisabled(MAX_COUNTER_VALUE)}
            onClick={handlePlusBtnClick}/>

          <Logs logs={logs} />
        </div>
      </div>
      <div className="container">
        <User />
      </div>
    </>
  )
}

export default App
