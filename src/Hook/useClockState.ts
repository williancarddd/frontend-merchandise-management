import { useState } from 'react'

export function useClockState(
  pinedMessage: string
): [string, (tempMessage: string) => void] {
  const [message, setMessage] = useState(pinedMessage)
  function setTempMessage(tempMessage: string) {
    setMessage(tempMessage)
    setTimeout(() => {
      setMessage(pinedMessage)
    }, 2500)
  }

  return [message, setTempMessage]
}
