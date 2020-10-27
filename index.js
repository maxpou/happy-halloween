const happyHalloween = () => {
  const audio = new Audio(
    'https://happy-halloween.netlify.app/assets/ghost.mp3'
  )

  const defaultSelectors = [
    'a',
    'button',
    'input[type="submit"]',
    'input[type="reset"]',
    'input[type="button"]'
  ]

  const everythingClickable = Array.from(
    document.querySelectorAll(defaultSelectors.join(','))
  )

  const booSound = event => {
    audio.play()
    return event
  }

  everythingClickable.forEach(somethingClickable => {
    somethingClickable.addEventListener('click', booSound)
    somethingClickable.style.cursor = "url('https://happy-halloween.netlify.app/assets/pumpkin.png'), auto"
  })
  
  document.body.style.cursor = "url('https://happy-halloween.netlify.app/assets/pumpkin.png'), auto"
}

window.onload = () => {
  happyHalloween()
}
