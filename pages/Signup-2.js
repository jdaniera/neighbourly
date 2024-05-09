import Head from 'next/head';
import styles from '@/styles/Signup.module.css';
import Image from 'next/image';

export default function Signup1() {

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <div className={styles.iphoneFrame}>
            <main className={`${styles.main}`}>
              <div className={styles.container}>
              <div className={styles.header}>
                    <h1>Great, Jalen!,</h1>
                    <h3>One last step...</h3>
                </div>
                <div className={styles.cardBackground}>
                  <div className={styles.progressBar}>
                    <Image src="/images/OnboardingImages/progressBar2.svg" alt="progressBar-50%done" width={352} height={31} />
                  </div>
                  <div className={styles.container}>
                    <h3 className={styles.title}>Account Info:</h3>
                    <p className={styles.fieldTitle}>Username</p>
                    <input type="text" className={styles.input} placeholder="Please enter your username:" />
                    <p className={styles.fieldTitlePass}>Password</p>
                    <input type='text' className={styles.input} placeholder="Please enter your password:" />
                    <input type='text' className={styles.input2} placeholder="Please re-enter your password:" />
                    <input type="submit" className={styles.button2} value="Continue" />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </>
    )
}