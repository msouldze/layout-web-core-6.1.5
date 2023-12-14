import { hasClass, getFirstChild } from './util.js'

const setStyle = (target, parent, className) => {
  const content = getFirstChild(target, parent)
  const wrapperElement = content.children[0]
  const wrapperHeight = wrapperElement.scrollHeight

  target.style.display = 'none'

  if (className === 'show') {
    const hideButton = target.nextElementSibling
    hideButton.style.display = 'block'
    content.style.height = wrapperHeight + 'px'
  } else {
    const showButton = target.previousElementSibling
    showButton.style.display = 'block'
    content.style.height = null
  }
}

const toggle = (target, name) => {
  if (target.closest('.introduction')) {
    setStyle(target, '.introduction__box', name)
  } else {
    setStyle(target, '.container', name)
  }
}

export const toggleContent = () => {
  document.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    const { target } = event

    if (target.tagName !== 'BUTTON') {
      return
    }

    if (hasClass(target, 'show')) {
      if (!hasClass(target, 'show')) {
        return
      }
      toggle(target, 'show')
    } else {
      if (!hasClass(target, 'hide')) {
        return
      }
      toggle(target, 'hide')
    }
  })
}
