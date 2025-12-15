import { useState } from "react";

import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import Button from "./components/Button/Button"
import Counter from "./components/Counter/Counter";

const INITIAL_COUNTER = 0;
const COUNTER_STEP = 1;
const MIN_COUNTER_VALUE = -5;
const MAX_COUNTER_VALUE = 5;

function App() {
  const [counter, setCounter] = useState(INITIAL_COUNTER)

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
    setCounter(counter + COUNTER_STEP)
  }

  function handleMinusBtnClick() {
    setCounter(counter - COUNTER_STEP)
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
      <div>
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
        </div>
      </div>
      
    </>
  )
}

export default App
