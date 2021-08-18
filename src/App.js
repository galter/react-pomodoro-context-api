import { useContext, useEffect } from 'react'
import CountdownAnimation from './component/CountdownAnimation'

import Button from './component/Button'
import SetPomodoro from './component/SetPomodoro'

import { SettingsContext } from './context/SettingsContext'

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
  } = useContext(SettingsContext)

  useEffect(() => updateExecute(executing), [executing, startAnimate])

  console.log(pomodoro)
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be Productive the right way.</small>
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={executing.active === 'work' && 'active-label'}
                _callback={() => setCurrentTimer('work')}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={executing.active === 'short' && 'active-label'}
                _callback={() => setCurrentTimer('short')}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={executing.active === 'long' && 'active-label'}
                _callback={() => setCurrentTimer('long')}
              />
            </li>
          </ul>

          <Button title="Settings" _callback={SettingBtn} />

          <div className="time-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>

          <div className="button-wrapper">
            <Button
              title="Start"
              className={!startAnimate && 'active'}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              className={startAnimate && 'active'}
              _callback={pauseTimer}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default App
