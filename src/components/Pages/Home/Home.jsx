import React from 'react';
import style from './Home.module.css';
import Header from 'components/Header';
// import girl from '../../images/girl-whith-flowers.jpg'

function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <section className={style.heroSection}>
          <div className={style.container}>
            <div className={style.heroSectionWrapper}>
              <div className={style.textContant}>
                <span className={style.greetingText}>
                  Welcome to Beautyness!!!
                </span>
                <h2 className={style.heroTitle}>
                  Beauty is power a smile is its sword.
                </h2>
                <p className={style.heroText}>
                  There are many variation of passages are Ipsum available,
                  majority have suffered alteration in some form.
                </p>
                <button className={style.heroBtn}>Make a reservation</button>
              </div>
{/* 
              <img
                className="hero_img"
                // src="../../images/girl-whith-flowers.jpg"
                // src={girl}
                src='~src/images/girl-whith-flowers.jpg"'
                alt="Beautiful girl"
                width={550}
                height={545}
              /> */}
              <div className={style.heroDecoration}>

              </div>
            </div>
          </div>
        </section>
        <section className={style.treatmentSection}>
          <div className={style.container}>
            <ul className={style.treatmentList}>
              <li className={style.treatmentItem}>
                <div className="treatmentCard">
                  <img
                    className={style.treatmentImg}
                    src="#"
                    alt="Spa & Massage"
                    width={330}
                    height={250}
                  />
                  <h3 className={style.treatmentSubtitle}>Spa & Massage</h3>
                  <p className={style.treatmentText}>
                    If you are going to use a passage offer Lorem Ipsum, you
                    need to be sure hidden in the middle of text.
                  </p>
                  <button type="button" className={style.treatmentBtn}>
                    Read more
                  </button>
                </div>
              </li>
              <li className={style.treatmentItem}>
                <div className="treatmentCard">
                  <img
                    className={style.treatmentImg}
                    src="#"
                    alt="Hair & Beauty"
                    width={330}
                    height={250}
                  />
                  <h3 className={style.treatmentSubtitle}>Hair & Beauty</h3>
                  <p className={style.treatmentText}>
                    If you are going to use a passage offer Lorem Ipsum, you
                    need to be sure hidden in the middle of text.
                  </p>
                  <button type="button" className={style.treatmentBtn}>
                    Read more
                  </button>
                </div>
              </li>
              <li className={style.treatmentItem}>
                <div className="treatmentCard">
                  <img
                    className={style.treatmentImg}
                    src="#"
                    alt="Body Treatments"
                    width={330}
                    height={250}
                  />
                  <h3 className={style.treatmentSubtitle}>Body Treatments</h3>
                  <p className={style.treatmentText}>
                    If you are going to use a passage offer Lorem Ipsum, you
                    need to be sure hidden in the middle of text.
                  </p>
                  <button type="button" className={style.treatmentBtn}>
                    Read more
                  </button>
                </div>
              </li>

              
            </ul>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
