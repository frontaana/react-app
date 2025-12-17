import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import ProjectsSection from "./pages/ProjectsSection/ProjectsSection";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutSection from "./pages/AboutSection/AboutSection"
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
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 

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

  // useEffect(() => {
  //   localStorage.setItem('count', count)
  // }, [count])

  function handleBtnClick() {
    setCount(count + 1)
    localStorage.setItem('count', count)
  }

  console.log('component rendered');
  // snippets в vscode - fetch & axios snippets | simple react snippets
  
  // используй, когда взаимодействуешь со сторонней системой (бекенд, localstorage, ),
  // и ты хочешь чтобы данные приложения были засинхронизированы с внешней системой
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          console.error('с запросом что-то не так', response);
          throw new Error('Ошибка в запросе')
        }

        return response.json();
      })
      .then(data => {
        console.log(data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(true);
        setIsError(true);
      })

    // dependencies list - список зависимостей - 
  }, [])

  return (
    <>
      <div className="container">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <div>
        {count}
        <div>
          <button onClick={handleBtnClick}> 
            Счетчик++
          </button>
        </div>
      </div>
      <div className="container">
        <a
          onClick={handleLinkClick}
          onMouseOver={handleMouseOver}
          href="https://www.google.com">Ссылка</a>
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
      <div className="container">
        { isError ? 'ошибка запроса' : '' }
        { isLoading ? 'загрузка...' : '' }
        { users ? JSON.stringify(users) : '' }
      </div>
    </>
  )
}

export default App
