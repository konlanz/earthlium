import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReferralModalImage.module.css';

const ReferralModalImage = () => (
  <div className={styles.ReferralModalImage}>
            <section className="glass">
                <div className="container">
                    <h4> Refer a friend</h4>
                    <p className="text">Your friend needs to activate the account and rate 3 brands before you receive your
                        referral bonus.</p>
                </div>
                <div className="container-image">
                    <img src="./images/earth.jpg" className="img-responsive" alt="" />
                    <div className="overImage">
                        <h3 className="tc">Invite friends now!</h3>
                        <p className="tc">and receive 500 $ tokens each</p>
                    </div>
                </div>
            </section>
        </div>

);

ReferralModalImage.propTypes = {};
ReferralModalImage.defaultProps = {};
export default ReferralModalImage;
