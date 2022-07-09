import React, { useState } from "react";
import Modal from '../Modal/Modal';
import ReferralModal from '../ReferralModal/ReferralModal';
const Referral = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <main>
                <div className="navBar">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 9H1M23 17H1M23 1H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="116" height="23" viewBox="0 0 116 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.34351 22.6092C11.1257 22.6092 13.7645 20.7111 14.3802 17.5572H11.0671C10.6566 18.9297 9.36655 19.689 7.40215 19.689C5.02728 19.689 3.67859 18.4041 3.41472 15.8634L14.3802 15.8342V14.7537C14.3802 10.2566 11.5655 7.36553 7.22624 7.36553C2.97493 7.36553 0.0136719 10.4902 0.0136719 15.0166C0.0136719 19.4845 3.03357 22.6092 7.34351 22.6092ZM7.25556 10.2858C9.39587 10.2858 10.8325 11.5999 10.8325 13.5857H3.50268C3.85451 11.4247 5.14456 10.2858 7.25556 10.2858Z" fill="white" />
                        <path d="M20.5058 22.6093C22.7634 22.6093 24.7278 21.5872 25.3435 20.0979L25.6074 22.2296H28.7446V13.4689C28.7446 9.46816 26.3404 7.36558 22.4409 7.36558C18.5121 7.36558 15.932 9.40975 15.932 12.5344H18.9812C18.9812 11.0159 20.154 10.1398 22.265 10.1398C24.0828 10.1398 25.2556 10.9283 25.2556 12.8848V13.2061L20.9163 13.5273C17.4859 13.7901 15.5508 15.4547 15.5508 18.1121C15.5508 20.8279 17.4273 22.6093 20.5058 22.6093ZM21.6786 19.9226C20.066 19.9226 19.1864 19.2802 19.1864 17.9661C19.1864 16.798 20.0367 16.0679 22.265 15.8635L25.2849 15.6299V16.3891C25.2849 18.6085 23.8775 19.9226 21.6786 19.9226Z" fill="white" />
                        <path d="M39.593 7.74516C39.0066 7.59915 38.5082 7.54074 38.0097 7.54074C36.0747 7.54074 34.6966 8.50443 34.0809 9.93534L33.8757 7.83277H30.504V22.2296H34.0809V15.221C34.0809 12.4176 35.6935 11.045 38.2736 11.045H39.593V7.74516Z" fill="white" />
                        <path d="M47.1273 22.2295V10.7822H49.942V7.80353H47.1273V3.30635H43.5503V7.80353H40.765V10.7822H43.5503V22.2295H47.1273Z" fill="white" />
                        <path d="M54.6929 22.2296V14.3449C54.6929 12.1839 56.0122 10.607 58.2698 10.607C60.0876 10.607 61.2897 11.7751 61.2897 14.1989V22.2296H64.8667V13.352C64.8667 9.6141 62.9902 7.36551 59.4133 7.36551C57.3316 7.36551 55.6311 8.27078 54.7222 9.6725V0.50293H51.1159V22.2296H54.6929Z" fill="white" />
                        <path d="M70.1732 22.2296V0.50293H66.6256V22.2296H70.1732Z" fill="white" />
                        <path d="M73.7216 4.9125C74.8943 4.9125 75.8619 3.94882 75.8619 2.75152C75.8619 1.55422 74.8943 0.61974 73.7216 0.61974C72.4902 0.61974 71.5226 1.55422 71.5226 2.75152C71.5226 3.94882 72.4902 4.9125 73.7216 4.9125ZM71.9331 22.2296H75.5101V7.80354H71.9331V22.2296Z" fill="white" />
                        <path d="M87.2685 7.80354V15.367C87.2685 18.112 86.1837 19.4261 83.9261 19.4261C81.9324 19.4261 80.8475 18.3164 80.8475 15.5714V7.80354H77.2706V16.8271C77.2706 20.3606 79.235 22.6092 82.5774 22.6092C84.5125 22.6092 86.3889 21.6747 87.2685 20.3022L87.5324 22.2296H90.8455V7.80354H87.2685Z" fill="white" />
                        <path d="M96.1816 22.2296V14.0529C96.1816 11.7167 97.5596 10.607 99.2601 10.607C100.961 10.607 102.045 11.6875 102.045 13.7024V22.2296H105.622V14.0529C105.622 11.6875 106.942 10.5778 108.672 10.5778C110.372 10.5778 111.486 11.6583 111.486 13.7316V22.2296H115.034V12.7972C115.034 9.46808 113.099 7.36551 109.581 7.36551C107.382 7.36551 105.681 8.446 104.948 10.1105C104.186 8.446 102.661 7.36551 100.462 7.36551C98.3805 7.36551 96.9146 8.29998 96.1816 9.49729L95.8884 7.80354H92.6046V22.2296H96.1816Z" fill="white" />
                    </svg>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="9" r="6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.41406 26C3.9246 24.1949 4.88437 22.5785 6.16495 21.2791M24.5859 26C23.2801 21.383 19.0351 18 14 18C12.5532 18 11.1717 18.2793 9.9064 18.7869" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24 12V12.9857M24 18V15M21 15H24M27 15H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                </div>
                <section className="real-container">
                    <div className="real-card">
                        <div className="real-card-top" >
                            MY EARTHLIUM TOKENS
                            <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.925 1C14.925 1 19.2449 5.40565 22.08 8.12794C22.4075 8.44233 22.1845 9 21.7306 9H1M14.925 17L19.4856 12.4817" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <p className="real-card-p" >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9995 37.0548C29.4189 37.0548 37.0548 29.4189 37.0548 19.9995C37.0548 10.5802 29.4189 2.94434 19.9995 2.94434C10.5802 2.94434 2.94434 10.5802 2.94434 19.9995C2.94434 29.4189 10.5802 37.0548 19.9995 37.0548ZM13.4966 14.3222L18.7727 19.9995L13.4966 25.6769V28.4658H26.2582V25.3781H19.4184L13.4966 28.4658L22.4985 20.5723L22.4985 19.9995L22.4985 19.4268L13.4966 11.5333L19.4184 14.621H26.2582V11.5333H13.4966V14.3222Z" fill="url(#paint0_linear_1404_13044)" />
                                <defs>
                                <linearGradient id="paint0_linear_1404_13044" x1="19.9995" y1="2.94434" x2="19.9995" y2="37.0548" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.66" />
                                    <stop offset="1" stop-color="white" />
                                </linearGradient>
                            </defs>
                             </svg>
                             <div className="real-text">20,534</div>

                        </p>
                    </div>
                    <div className="main-text">Rate todays's brands</div>
                    <div className="card">
                        <img src="./images/assassins.png" className="imageX" alt="" />
                        <div className="card-info">
                            Meta
                        </div>
                        <div className="Rate">Rate</div>
                    </div>
                    <div className="card">
                        <img src="./images/sackboy.png" className="imageX" alt="" />
                        <div className="card-info">
                            Nike
                        </div>
                        <div className="Rate">Rate</div>
                    </div>

                    <div className="card">
                        <img src="./images/assassins.png" className="imageX" alt="" />
                        <div className="card-info">
                            Meta
                        </div>
                        <div className="Rate">Rate</div>
                    </div>
                    <div className="main-text">next brands available in 11 hours</div>
                    <button className="btnx" onClick={() => setIsOpen(true)} >REFERRAL LINK COPIED</button>
                </section>
            </main>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    )
};

Referral.propTypes = {};
Referral.defaultProps = {};
export default Referral;
