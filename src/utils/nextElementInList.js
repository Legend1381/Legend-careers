const nextElementInList = (list, value) => {
  const currentElementIndex = list.indexOf(value)
  const nextElementIndex = (currentElementIndex + 1) % list.length
  const nextElement = list[nextElementIndex]
  return nextElement
}

export default nextElementInList
