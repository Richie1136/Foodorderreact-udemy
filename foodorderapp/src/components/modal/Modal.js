import './Modal.css'
import ReactDOM from 'react-dom'

const Backdrop = ({ onClose }) => {
  return <div className='backdrop' onClick={onClose} />
}

const ModalOverlay = ({ children }) => {
  return (
    <div className='modal'>
      <div className='content'>{children}</div>
    </div>
  )
}


const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById('overlay'))}
      {ReactDOM.createPortal(<ModalOverlay children={children} />, document.getElementById('overlay'))}
    </>
  )
}
export default Modal
