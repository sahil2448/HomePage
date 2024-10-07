import React from "react";
import styles from "./Pages1__2.module.css";
const Pages1__2 = () => {
  return (
    <>
      <div className={styles.Home}>
        <nav className={styles.nav}>
          <div className={styles.lgMain}>
            <a className={styles.logo}>
              <img src="./Images/Group 1.png" alt="Image" />
            </a>
            <div className={styles.text}>
              <p>
                National Service Scheme <br /> IIT ROORKEE
              </p>
              <p></p>
            </div>
          </div>

          <div className={styles.navLinks}>
            <a>Home</a>
            <a>About</a>
            <a>Events</a>
            <a>Teams</a>
            <button id={styles.ss}>Social Summit</button>
          </div>
        </nav>
        <div className={styles.header}>
          <h2>
            NSS IIT <span>Roorkee</span>{" "}
            <p className={styles.slogan}>Not for me, but for the Nation</p>
          </h2>
        </div>
      </div>
      <div className={styles.page2}>
        <div className={styles.divs}>
          <div className={styles.div1} id={styles.div1}>
            <h3>Our vision</h3>
            <p>
              At NSS, IIT Roorkee, we aspire to cultivate a society where
              individuals embrace social responsibility. We strive to nurture
              empathetic leaders who, through service and innovation, address
              societal challenges. Our vision is a community where every member
              is actively engaged in contributing to collective betterment.
            </p>
          </div>
          <div className={styles.div1} id={styles.div2}>
            <h3>Who we are?</h3>
            <p>
              NSS, IIT Roorkee, is a vibrant student community dedicated to
              creating a positive societal impact. Grounded in service,
              community development, and social awareness, we are a diverse
              group united in the pursuit of fostering volunteerism. We believe
              in leveraging education for transformative change.
            </p>
          </div>
          <div className={styles.div1} id={styles.div3}>
            <h3>Our Goals</h3>
            <p>
              NSS, IIT Roorkee, strives to create a positive impact by engaging
              with local communities, empowering individuals through skill
              development, and raising awareness on social issues. Our
              multifaceted approach aims to foster a culture of empathy,
              responsibility, and social change among students, creating
              socially conscious leaders.
            </p>
          </div>
        </div>
        <div className={styles.alone} id={styles.div4}>
          <h3>What is it we do?</h3>
          <p>
            With a vision to spread social harmony across & evolve student youth
            as accomplished social leaders & administrators, NSS IIT Roorkee is
            an organization of over 1000 active & dedicated members having a
            common goal of ‘Striving for the betterment of our motherland by
            fully indulging ourselves in the service of mankind.’
          </p>
        </div>
      </div>
    </>
  );
};

export default Pages1__2;
