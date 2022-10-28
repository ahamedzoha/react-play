// A function that takes an object with nested properties and flattens them
// into a single object with dot notation
export const flattenObject = (obj) => {
  const flattened = {}

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]))
    } else {
      flattened[key] = obj[key]
    }
  })

  return flattened
}
