import * as util from './util.js'

let parent
let isOpen

const toggle = (element) => {
  const backgroundElement = document.querySelector('.background')
  if (isOpen) {
    util.add(document.body, 'remove-scrolling')
    util.add(backgroundElement, 'is-active')
    util.add(element, 'is-open')
  } else {
    util.remove(document.body, 'remove-scrolling')
    util.remove(backgroundElement, 'is-active')
    util.remove(element, 'is-open')
  }
}

const addParentElement = (parentName) => {
  const parentElement = document.querySelector(`.${parentName}`)

  isOpen = true
  parent = parentName
  toggle(parentElement)
}

const removeParentElement = (target, parent) => {
  const parentElement = document.querySelector(`.${parent}`)

  if (
    !util.isClassName(target, 'burger') &&
    !util.hasClass(target, 'background')
  ) {
    return
  }
  isOpen = false
  parent = ''
  toggle(parentElement)
}

export const toggleSideMenu = () => {
  document.addEventListener('click', (event) => {
    event.preventDefault()

    const { target } = event
    isOpen = false

    if (util.isClassName(target, 'header__burger')) {
      addParentElement('menu')
    } else if (
      util.hasClass(target, 'status-icon') &&
      target.closest('.lg-only')
    ) {
      addParentElement('feedback')
    } else if (
      util.hasClass(target, 'inquiry-icon') &&
      target.closest('.lg-only')
    ) {
      addParentElement('request')
    } else if (parent === 'menu') {
      removeParentElement(target, 'menu')
    } else if (parent === 'feedback') {
      removeParentElement(target, 'feedback')
    } else if (parent === 'request') {
      removeParentElement(target, 'request')
    }
  })
}
