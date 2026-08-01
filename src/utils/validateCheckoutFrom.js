const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[0-9+\-\s]{7,15}$/

export const validateCheckoutForm = (form) => {
  const errors = {}

  if (!form.firstName.trim()) errors.firstName = 'First name is required'
  if (!form.lastName.trim()) errors.lastName = 'Last name is required'
  if (!form.streetAddress.trim()) errors.streetAddress = 'Street address is required'
  if (!form.country) errors.country = 'Please select a country'
  if (!form.state) errors.state = 'Please select a state'
  if (!form.zipCode.trim()) errors.zipCode = 'Zip code is required'

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!phoneRegex.test(form.phone)) {
    errors.phone = 'Enter a valid phone number'
  }

  return errors
}