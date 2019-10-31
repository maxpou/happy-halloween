const happyHalloween = () => {
  const audio = new Audio(
    'https://www.freesoundeffects.com/files/mp3_466378.mp3'
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

  const boo = event => {
    audio.play()
    return event
  }

  everythingClickable.forEach(link => {
    link.addEventListener('click', boo)
  })

  document.body.style.cursor = "url('https://i.ibb.co/ZVYWMDj/iconfinder-mouse-202899.png'), auto"
}

window.onload = () => {
  happyHalloween()
  console.log('loaded')
}
