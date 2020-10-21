const happyHalloween = () => {
  const audio = new Audio(
    './assets/ghost01.mp3'
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
  })
  
  document.body.style.cursor = "url('https://i.ibb.co/ZVYWMDj/iconfinder-mouse-202899.png'), auto"
}

window.onload = () => {
  happyHalloween()
}
