import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styles from './homepage.module.scss';
import EnvienStudio from '../assets/envien-studio.svg';
import EnvienAcademy from '../assets/envien-academy.png';
import EnvienWebDev from '../assets/envien-web-development.svg';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Envien Studio</title>
        <meta name='description' content='Envien Web Development company profile' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles['main']}>
        <section className={styles['welcome-board']}>
          <div className={styles['welcome-board-header']}>
            <div className={styles['welcome-board-message']}>
              <h1>Envien Studio</h1>
              <p>
                We are here to help implement your ideas into website, web-based games, portfolio, e-commerce, blog,
                company profile, you name it. The best time to start realizing your ideas probably a few years ago, the
                second best time is now.
              </p>
              <p className={styles['cta-message']}>Already have something in mind?</p>
              <button className={styles['cta-button']}>CONTACT US NOW</button>
            </div>

            <Image width={900} height={500} alt='Web Development Studio' objectFit='cover' src={EnvienStudio} />
          </div>

          <div className={styles['website-introduction']}>
            <h2>The backbone for internet business</h2>
            <blockquote>
              <cite>
                One of the main reasons you should have a website for your business is to increase your organization's
                credibility. Chances are there are several providers offering a similar service to yours. One way you
                can stand out is by having a website that looks good and clearly communicates quality information to
                your consumers. Without a website, people may question your legitimacy as a business. Having a website
                is an opportunity to make a great first impression and give people comfort that you’re a real business.
              </cite>
            </blockquote>
            <p className={styles['quote-source']}>
              Fifth paragraph of{' '}
              <em>
                <a
                  className={styles['forbes-link']}
                  target='_blank'
                  rel='noreferrer noopener'
                  href='https://www.forbes.com/sites/theyec/2020/02/03/why-every-business-needs-a-website/?sh=695f78d56e75'>
                  Why Every Business Needs A Website
                </a>
              </em>{' '}
              by Forbes, 2020
            </p>
            <button className={styles['cta-button']}>SEE HOW WE MIGHT HELP</button>
          </div>
        </section>

        <section className={styles['our-services']}>
          <h1>Our Services</h1>
          <p className={styles['services-brief']}>
            Knowing the importance of having a website is not enough. Your response to this knowledge is the one that
            matters. Envien Studio provides some solutions to help you, either we build the website for you or teach you
            how to do it. See our services below.
          </p>

          <div className={styles['services']}>
            <div className={styles['service-item']}>
              <h3>Website Development</h3>
              <div className={styles['service-image']}>
                <Image width={300} height={200} src={EnvienWebDev} alt='Web Development' />
              </div>
              <p>
                Create a website using the latest technology (Next Js & TypeScript) which produce a fast, robust, and
                responsive in cross platform and SEO friendly.
              </p>
              <button className={styles['cta-button']}>Tell Us Your Idea</button>
            </div>
            <div className={styles['service-item']}>
              <h3>Envien Academy</h3>
              <h4>&lt; Full Stack Web Development /&gt;</h4>
              <div className={styles['service-image']}>
                <Image width={300} height={190} src={EnvienAcademy} alt='Envien Academy' />
              </div>
              <p>
                Exclusive mentorship programme (max. 5 students per batch) to learn and practice about Full Stack
                Development including HTML, CSS, Javascript, Node, Express, MongoDB, MySQL, and many more.
              </p>
              <button className={`${styles['cta-button']} ${styles['cta-disabled']}`} disabled>
                COMING SOON
              </button>
            </div>
          </div>
        </section>
        <section className={styles['portfolio']}>
          <h1>Clients Who Grow Together With Us </h1>
          <div className={styles['clients']}>
            <div className={styles['client-item']}>
              <Image
                width={200}
                height={200}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
              />
              <div className={styles['project-item']}>
                <h3>Psychological Test Web Application</h3>
                <h4>Inti dinamis</h4>
                <p>
                  An online platform for holding a Characteristic & General Ability Test with result processing
                  automation{' '}
                </p>
                <a href='https://www.intidinamis-test.com' target='_blank' rel='noreferrer noopener'>
                  intidinamis-test.com
                </a>
              </div>
            </div>

            <div className={styles['client-item']}>
              <Image
                width={200}
                height={200}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
              />
              <div className={styles['project-item']}>
                <h3>Company Profile Website</h3>
                <h4>Inti dinamis</h4>
                <p>A website for Inti Dinamis Consulting contain the company profile, services, portfolio, etc.</p>
                <a href='https://www.intidinamis.com' target='_blank' rel='noreferrer noopener'>
                  intidinamis.com
                </a>
              </div>
            </div>

            <div className={styles['client-item']}>
              <Image
                width={200}
                height={200}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
              />
              <div className={styles['project-item']}>
                <h3>Job Portal Website</h3>
                <h4>Crossbell</h4>
                <p>A website platform for bringing together job-seeker and employer</p>
                <a href='https://www.crossbell.id' target='_blank' rel='noreferrer noopener'>
                  crossbell.id
                </a>
              </div>
            </div>

            <div className={styles['client-item']}>
              <Image
                width={200}
                height={200}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
              />
              <div className={styles['project-item']}>
                <h3>Blog Site</h3>
                <h4>Journey To Valley</h4>
                <p>A blog site where users can read real success story of people in tech industries</p>
                <a href='https://www.j2v.org' target='_blank' rel='noreferrer noopener'>
                  j2v.org
                </a>
              </div>
            </div>
            {/* <div className={styles['client-item']}>
              <Image
                width={200}
                height={200}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
              />
              <div className={styles['project-item']}>
                <h3>GameAs Web-based Psychological Test</h3>
                <h4>Telkom Indonesia</h4>
                <p>A web-based psychological test compiled in a game</p>
              </div>
            </div> */}
          </div>
        </section>
        <section className={styles['contact-us']}>
          <div className={styles['contact-information']}>
            <h2>GET IN TOUCH</h2>
            <h4>We ensure reliability, safety, and comfort in mind.</h4>
            <p>Email: novrandobilly@gmail.com</p>
            <p>Phone/Whatsapp: +62 821 3000 6695</p>
          </div>
          <div className={styles['contact-form']}>
            <form>
              <div>
                <label htmlFor='full-name'>Full Name</label>
                <input type='text' id='full-name' placeholder='Enter your name' />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Enter a valid email address' />
              </div>
              <div>
                <label htmlFor='phone-number'>phone</label>
                <input type='text' id='phone-number' placeholder='Enter your phone number' />
              </div>
              <div>
                <label htmlFor='message'>Message</label>
                <textarea id='message' cols={30} rows={10} placeholder='Enter your message'></textarea>
              </div>
              <button type='submit'>SUBMIT</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
