import styles from "./Pages3__6.module.css";

import React from "react";

const Pages3__6 = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Recent Events</h1>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src="./images/image 3.png" alt="" />
          </div>
          <div className={styles.content}>
            <h2>Sustainability Conclave</h2>
            <p>
              NSS IIT Roorkee is an organisation of over 1000 active and
              dedicated members with a common goal of 'striving to the
              betterment of our motherland by fully indulging ourselves in the
              service of mankind. It is a fraternity that aims to foster the
              feelings of social service among the youth and provide them with a
              platform where they can make a difference in society and develop
              one's interpersonal and intrapersonal skills. As highlighted by
              the motto ' Not for me, but for the nation ', the organisation
              aims to produce socially responsible engineers and work for the
              nation's development.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.heading}>
          <h1>The Bonds We Share</h1>
        </div>
        <div className={styles.imgs}>
          <div className={styles.set1}>
            <img src="./Sponsers/image 16.png" alt="" />
            <img src="./Sponsers/image 17.png" alt="" />
            <img src="./Sponsers/image 18.png" alt="" />
          </div>
          <div className={styles.set2}>
            <img src="./Sponsers/image 20.png" alt="" />
            <img src="./Sponsers/image 15.png" alt="" />
            <img src="./Sponsers/image 19.png" alt="" />
            <img src="./Sponsers/image 22.png" alt="" />
          </div>
          <div className={styles.set3}>
            <img src="./Sponsers/image 24.png" alt="" />
            <img src="./Sponsers/image 23.png" alt="" />
            <img src="./Sponsers/image 21.png" alt="" />
            <img src="./Sponsers/image 13.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.heading2}>
          <h1>Our Esteemed Guests</h1>
        </div>
        <div className={styles.guests}>
          <div className={styles.imgContainer}>
            <img src="./images/g1.png" alt="" />
            <p>Prakhar singh dhami</p>
          </div>
          <div className={styles.imgContainer}>
            <img src="./images/g2.png" alt="" />
            <p>Ashneer Grover</p>
          </div>
          <div className={styles.imgContainer}>
            <img src="./images/g3.png" alt="" />
            <p>Kiran Bedi</p>
          </div>
          <div className={styles.imgContainer}>
            <img src="./images/g4.png" alt="" />
            <p>Sonam Wangch</p>
          </div>
          <div className={styles.imgContainer}>
            <img src="./images/g1.png" alt="" />
            <p>Prakhar singh dhami</p>
          </div>
        </div>
      </div>
      <div className={styles.blank}></div>
      <div className={styles.container4}>
        <div className={styles.containerInner1}>
          <div className={styles.contact}>
            <div className={styles.info}>
              <h1>Contact us</h1>
              <div className={styles.containerSmall}>
                <div className={styles.address}>
                  <p>
                    NSS Office, <br />
                    2nd floor, Multi Activity Centre,
                    <br />
                    IIT Roorkee, Roorkee-247667,
                    <br />
                    Uttarakhand, IN
                  </p>
                </div>
                <div className={styles.number}>
                  <p>
                    nss@iitr.ac.in,
                    <br />
                    +91-9709865073
                  </p>
                  <p></p>
                </div>
              </div>
              <div className={styles.media}>
                <img src="./images/Group 584.png" alt="" />
                <img src="./images/Layer 2.png" alt="" />
                <img src="./images/OBJECTS.png" alt="" />
                <img src="./images/OBJECTS (1).png" alt="" />
                <img src="./images/Group 584.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <img src="./images/map.png" alt="" />
          </div>
        </div>
        <div className={styles.containerInner2}>
          <hr />
          <div className={styles.copyright}>
            Copyright © 2022 NSS IITR All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages3__6;
