import styles from './FirstSection.module.scss'
import AnimatedText from "../Animations/OverflowText.tsx";
import FromSmallToNormal from "../Animations/FromSmallToNormal.tsx";
const FirstSection = () => {
    return (
        <main className={styles.main}>
            <section className={styles.about}>
                <div className={styles.about_header}>
                    <AnimatedText className={styles.about_logo} text={'<img src="/logo.png"/>'}/>
                    <div className={styles.about_buttons}>
                        <FromSmallToNormal>
                            <button className={styles.about_button}><img src="/map.svg"/></button>
                        </FromSmallToNormal>
                        <FromSmallToNormal>
                            <button className={styles.about_button}><img src="/menu.svg"/></button>
                        </FromSmallToNormal>
                    </div>
                </div>

                <div className={styles.about_text}>
                    <AnimatedText text={'Building Your Dreams'} className={styles.about_subtitle} />
                    <AnimatedText className={styles.about_title}
                        text={'Real Estate in Dubai: <br/> Ideal for Living and<br/> Investing'}
                    />
                </div>

                <div className={styles.about_footer}>
                    <div className={styles.about_contact}>
                        <span>
                            <img src="/phone.svg"/>
                        </span>
                        Contact Us Now
                    </div>
                    <div className={styles.about_explore}>
                        <AnimatedText text={'Explore All <br/> Our Properties'}/>
                        <FromSmallToNormal>
                            <img className={styles.about_explore_img} src="/explore.png"/>
                            <span className={styles.about_explore_arrow}>
                                <img src="/arrow-up-right.svg"/>
                            </span>
                        </FromSmallToNormal>
                    </div>
                </div>
            </section>
            <section className={styles.catalog}>
                <div className={styles.catalog_header}>
                    <div className={styles.catalog_labels}>
                        <AnimatedText text={'More than 1500 real <br/> estate properties'} />
                        <AnimatedText text={' From $145,000 with a <br/> yield of 10% per annum'} />
                    </div>
                    <div className={styles.catalog_buttons}>
                        <FromSmallToNormal>
                            <div className={`${styles.catalog_button} ${styles.catalog_button_like}`}>
                                <img src="/heart.svg"/>
                            </div>
                        </FromSmallToNormal>
                        <FromSmallToNormal>
                            <div className={`${styles.catalog_button} ${styles.catalog_button_garage}`}>
                                <img src="/garage.svg"/>
                            </div>
                        </FromSmallToNormal>
                    </div>
                </div>
                <div className={styles.catalog_footer}>
                    <div></div>
                    <FromSmallToNormal>
                        <div className={styles.catalog_download}>
                            catalog <br/> download
                            <span>
                                <img src="/download.svg" alt=""/>
                            </span>
                        </div>
                    </FromSmallToNormal>
                </div>
            </section>
        </main>
    );
};

export default FirstSection;