import './Modal.css'
import ReactDOM from 'react-dom'

const Backdrop = () => {
  return <div className='backdrop' />
}

const ModalOverlay = ({ children }) => {
  return (
    <div className='modal'>
      <div className='content'>{children}</div>
    </div>
  )
}


const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlay'))}
      {ReactDOM.createPortal(<ModalOverlay children={children} />, document.getElementById('overlay'))}
    </>
  )
}
export default Modal
