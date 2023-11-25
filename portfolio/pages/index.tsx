import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.contacs}>
        <div className={style.imgPhoto}></div>
        <div className={style.info}>
          <h1>Maxim Shidlovskiy</h1>
          <p>Software Engineer</p>
          <p>Based: Belarus</p>
          <p>Phone: +37529-1077162</p>
          <p>E-mail: shidloba@gmail.com</p>
        </div>
      </div>

      <div className={style.title}>Work Experience</div>
      <div className={style.job}>
        <div className={style.jobBlock}>
          <h1>Software Engineer</h1>
          <h2>HSC Technology</h2>
          <h2>1 year</h2>
          <p>Development of all interactive elements of the web page</p>
        </div>
      </div>

      <div className={style.title}>Skills</div>
      <div className={style.skills}>

        <div className={style.block}>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>Node.js</p>
          <p>React</p>
        </div>
        <div className={style.block}>
          <p>Express.js</p>
          <p>Redux Toolkit</p>
          <p>MySQL</p>
          <p>PostgreSQL</p>
        </div>
      </div>

      <div className={style.educationLanguage}>
        <div className={style.educationBlock}>
          <div className={style.imgEducation}></div>
          <div className={style.education}>
            <p>Education</p>
            <p>1. Minsk university of managemant</p>
            <p>2. HSchool</p>
          </div>
        </div>
        <div className={style.languageBlock}>
          <div className={style.imgLanguage}></div>
          <div className={style.language}>
            <p>Language</p>
            <p>English B1</p>
          </div>
        </div>
      </div>

      <div className={style.portfolio}>
        <div className={style.qr}></div>
        <div className={style.infoPortfolio}>
          <h1>my portfolio on github</h1>
          <a href="https://github.com/MaxShidlovskiy">https://github.com/MaxShidlovskiy</a>
        </div>
      </div>

    </div>
  )
}