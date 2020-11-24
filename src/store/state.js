let defaultCity = 'Auckland'
try {
  if (localStorage) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
