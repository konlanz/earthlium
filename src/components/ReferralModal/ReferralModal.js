import React from 'react';
import styles from './ReferralModal.module.css';

const ReferralModal = () => (
    <div className={styles.ReferralModal}>
                <section className="glass">
                    <div className="container">
                        <h4> Refer a friend</h4>
                        <p className="text">Your friend needs to activate the account and rate 3 brands before you receive your referral bonus.</p>
                    </div>
                    <div className="cardx">
                        <img src="./images/assassins.png" className="imageX" alt="" />
                        <div className="card-info-f">
                            Monica James
                        </div>
                        <div className="rate">$500</div>
                    </div>
                    <div className="cardx">
                        <img src="./images/sackboy.png" className="imageX" alt="" />
                        <div className="card-info-f">
                            Christin Deel
                        </div>
                        <div className="rate">$500</div>
                    </div>
                    <div className="cardx">
                        <img src="./images/spiderman.png" className="imageX" alt="" />
                        <div className="card-info-f">
                            Francis McCampbel
                        </div>
                        <div className="rate">$500</div>
                    </div>
                    <div className="cardx">
                        <img src="./images/assassins.png" className="imageX" alt="" />
                        <div className="card-info-f">
                            Ruth Green
                        </div>
                        <div className="rate">$500</div>
                    </div>
                </section>
            </div>

);
ReferralModal.propTypes = {};
ReferralModal.defaultProps = {};
export default ReferralModal;
