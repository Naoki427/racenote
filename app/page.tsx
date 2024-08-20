import Image from "next/image";
import '../styles/global.css'
import styles from '@/app/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.introSection}>
        <div className={styles.main_pop}>
          <p className={styles.theme}>
            さまざまな角度から自分だけの予想を。
          </p>
          <div className={styles.regist_container}>
            <div className={styles.regist_frame}>
              <button className={styles.regist_button}>
                新規登録
              </button >
            </div>
          </div>
        </div>
        <div className={styles.home_image}>
          <Image
          src="/images/mainpage.PNG"
          alt="NO IMAGE"
          layout='fill'
          objectFit='contain'
          // width={450}
          // height={380}
          // style={{ /*maxWidth: '40%', height: 'auto',*/ marginTop: '40px'}}
        />
        </div>
      </div>
    </main>
  );
}
