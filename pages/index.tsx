import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Envien Studio</title>
        <meta name='description' content='Envien Web Development company profile' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles['main']}>
        <section>
          <div className={styles['welcome-board-message']}>
            <h1>Welcome To Envien Studio</h1>
            <p>
              We are here to help implement your ideas into website, web-based games, portfolio, e-commerce, blog,
              company profile, you name it. The best time to start realizing your ideas probably a few years ago, the
              second best time is now.
            </p>
            <p>Already have something in your mind?</p>
            <button>CONTACT US NOW</button>
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
            <p>
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
            <button>SEE HOW WE MIGHT HELP</button>
          </div>
        </section>

        <section className={styles['our-services']}>
          <h1>Our Services</h1>
          <p>
            Knowing the importance of having a website is not enough. Your response to this knowledge is the one that
            matters. Envien Studio provides some solutions to help you, either we build the website for you or teach you
            how to do it. See our services below.
          </p>

          <div className={styles['services']}>
            <div className={styles['service-item']}>
              <Image
                width={200}
                height={200}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
              />
              <h3>Website Development</h3>
              <p>
                Create a website or web-based application using the latest technology (Next Js & TypeScript) which will
                produce a fast, robust, and responsive in cross platform such as mobile phone, tablet, and desktop. By
                using Next Js, we ensure the website that we create will be SEO friendly, meaning that the website has
                the ability to be found easily by search engine, such as Google, to generate more visitors.
              </p>
              <button>Tell Us Your Idea</button>
            </div>
            <div className={styles['service-item']}>
              <Image
                width={200}
                height={200}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
              />
              <h3>Envien Academy</h3>
              <h4>&lt; Full Stack Web Development &gt;</h4>
              <p>
                The knowledge of building a website can be found a lot and free on the internet, that's a fact. Thus, we
                are here to provide exclusive mentorship programme (max. 5 students per batch) to ensure you gain this
                soft skill and understand how to implement it in the real life through a lot of practices.
              </p>
              <button>Check The Syllabus</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
