import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import MentorSection from '@/components/MentorSection';
import FindMentor from '@/components/FindMentor';
import MentorshipPageCard from '@/components/MentorshipPageCard';

export default function Home() {

  const headerTitle = 'Welcome, {user}!';
  const pageLayout = 'layout1';
  const backButton = true;
  const searchBar= true;
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
        <NavBar layout={pageLayout} title={headerTitle} backButton={backButton} searchBar={searchBar} settings={settings}/>
        <main className={`${styles.main}`}>
          <div className={styles.mainInnerContainer}>
          <MentorshipPageCard/>
          <MentorSection/>
          </div>
        </main>
        <TabBar/>
      </div>
    </>
  )
} 