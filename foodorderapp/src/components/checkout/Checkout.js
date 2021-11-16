import './Checkout.css'

import { useRef, useState } from 'react'

const isEmpty = (value => value.trim().length === 0)
const is5Chars = (value => value.trim().length === 5)

const Checkout = ({ onClose }) => {

  const [name, setName] = useState(true)
  const [address, setAddress] = useState(true)
  const [zipcode, setZipCode] = useState(true)
  const [city, setCity] = useState(true)


  const nameInput = useRef()
  const addressInput = useRef()
  const zipcodeInput = useRef()
  const cityInput = useRef()


  const handleConfirm = (e) => {
    e.preventDefault()

    const enteredname = nameInput.current.value
    const enteredaddress = addressInput.current.value
    const enteredzip = zipcodeInput.current.value
    const enteredcity = cityInput.current.value

    const enterednameIsValid = !isEmpty(enteredname)
    const enteredaddressIsValid = !isEmpty(enteredaddress)
    const enteredcityIsValid = !isEmpty(enteredcity)
    const enteredzipIsValid = is5Chars(enteredzip)

    setName(enterednameIsValid)
    setAddress(enteredaddressIsValid)
    setZipCode(enteredzipIsValid)
    setCity(enteredcityIsValid)

    const formIsValid = enterednameIsValid && enteredaddressIsValid &&
      enteredcityIsValid && enteredzipIsValid



    if (!formIsValid) {
      return
    }
  }

  return (
    <div>
      <form className='form' onSubmit={handleConfirm}>
        <div className='control'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInput} />
          {!name && <p>Please enter a valid name</p>}
        </div>
        <div className='control'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' ref={addressInput} />
          {!address && <p>Please enter a valid Address</p>}
        </div>
        <div className='control'>
          <label htmlFor='zipcode'>Zip Code</label>
          <input type='text' id='zipcode' ref={zipcodeInput} />
          {!zipcode && <p>Please enter a valid Zip Code</p>}
        </div>
        <div className='control'>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInput} />
          {!city && <p>Please enter a valid City</p>}
        </div>
        <div className='actions'>
          <button className='submit' type='submit'>Confirm</button>
          <button type='button' onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  )

}

export default Checkout