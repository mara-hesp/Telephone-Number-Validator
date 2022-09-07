// Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  let regex = /^1{1}\s?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)\d{4}|^(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)\d{4}|^\d{10}$/
  if (str.match(/\d/g).length >= 10) {
    return regex.test(str)
  }
  return false
}
