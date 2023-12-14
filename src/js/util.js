const add = (element, className) => element.classList.add(className)
const remove = (element, className) => element.classList.remove(className)
const isClassName = (target, className) => target.className === className
const hasClass = (target, className) => target.classList.contains(className)
const getFirstChild = (target, className) =>
  target.closest(className).firstElementChild

export { add, remove, isClassName, hasClass, getFirstChild }
