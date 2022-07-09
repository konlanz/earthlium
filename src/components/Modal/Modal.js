import React from 'react';
import styles from './Modal.module.css';
import ReferralModal from '../ReferralModal/ReferralModal';
import ReferralModalImage from '../ReferralModalImage/ReferralModalImage'
import { RiCloseLine } from "react-icons/ri";

const Modal = ({setIsOpen}) =>{
  return (
    <>
    <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
    <div className={styles.centered}>
      <div className={styles.modal}>

        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        <div className={styles.modalContent}>
          <ReferralModal/>
          {/* <ReferralModalImage/> */}
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
          </div>
        </div>
        <button className={styles.referralLink} onClick={() => setIsOpen(false)}>
          Referral link Copied
        </button>
      </div>
    </div>
  </>
  )
};


export default Modal;

