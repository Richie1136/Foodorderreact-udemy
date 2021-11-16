import './Checkout.css'


const Checkout = ({ onClose }) => {

  const handleConfirm = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form className='form' onSubmit={handleConfirm}>
        <div className='control'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' />
        </div>
        <div className='control'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' />
        </div>
        <div className='control'>
          <label htmlFor='zipcode'>Zip Code</label>
          <input type='text' id='zipcode' />
        </div>
        <div className='control'>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' />
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