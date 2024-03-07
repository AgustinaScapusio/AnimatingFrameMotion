import { createPortal } from 'react-dom';
import {motion} from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  const hiddenAnimationState = {y: 30 ,opacity: 0};
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
      variants={{
        hidden: hiddenAnimationState,
        visible: {y: 0, opacity: 1}
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
      open className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
