import { useState } from "react";

import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import Button from "./components/Button/Button"
import Counter from "./components/Counter/Counter";

function App() {
  const [counter, setCounter] = useState(0)

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
    setCounter(counter + 1)
  }

  function handleMinusBtnClick() {
    setCounter(counter - 1)
  }

  function isBtnDisabled(value) {
    return counter === value;
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
          <Counter value={counter} />
          <Button
            text={'-'}
            isDisabled={isBtnDisabled(-5)}
            onClick={handleMinusBtnClick}/>
          <Button
            text={'+'}
            isDisabled={isBtnDisabled(5)}
            onClick={handlePlusBtnClick}/>
        </div>
      </div>
      
    </>
  )
}

export default App
