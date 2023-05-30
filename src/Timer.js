import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [stop, setstop] = useState(false)
  const [second, setSecond] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!stop) {
        setSecond((second) => second + 1)
      }

      if (!stop) {
        setSecond((second) => second + 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [stop])

  return (
    <div>
      <h1>Timer</h1>
      Second : {second}
      <button
        onClick={() => {
          setstop(!stop)
        }}>
        {stop ? 'Start' : 'Stop'}
      </button>
    </div>
  )
}
