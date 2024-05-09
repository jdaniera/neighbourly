import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import InfoPage from '@/components/InfoPage';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';


export default function Ansa() {

  const headerTitle = 'Welcome, {user}!';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar = true;
  const settings = true;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.iphoneFrame}>
        <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} />
        <main className={`${styles.main}`}>
            <InfoPage
                mentor={true}
                title='Ansa Odoom'
                imageUrl='/images/mentors/ansa-odoom.svg'
                imageWidth={397}
                imageHeight={330}
                imageAlt='woman in business attire'
                bio="With over a decade of experience in the marketing realm, I am dedicated to mentoring aspiring marketers. 
                    My passion for the dynamic world of marketing is evident in my commitment to guiding and inspiring individuals in the industry."
                skills="Marketing, SEO Optimization"
                description={(
                    <ul>
                    <li>Over a decade of marketing experience.</li>
                    <li>Proven success in campaigns and projects.</li>
                    <li>Effective communication and mentoring skills.</li>
                    <li>Continuous professional development.</li>
                    <li>Leadership in guiding mentees.</li>
                    </ul>
                )}
                mentorType='Digital'
                mentorLength='30 - 60min'
                buttonText = 'Apply to be Mentored'
                />
        </main>
        <TabBar/>
      </div>
    </>
  )
} 