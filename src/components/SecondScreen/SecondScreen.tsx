import { useRef, useState, useEffect } from 'react';
import styles from './SecondScreen.module.scss'
import Marquee from "react-fast-marquee";
const SecondScreen = () => {
    const containerRef = useRef(null);
    const [top, setTop] = useState(50)
    const [size, setSize] = useState(50)
    const [borderRadius, setBorderRadius] = useState(30)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let visibility = entry.intersectionRatio; // Процент видимости
                    setBorderRadius(30)
                    if(visibility > 0.4){
                        visibility += 0.2
                        if (visibility > 1) {
                            visibility = 1;
                        }
                        if(visibility > 0.8){
                            setBorderRadius((1-visibility) * 30)
                        }
                        setTop((1 - visibility) * 100)
                        setSize(visibility * 100)
                    }
                }
            });
        }, {
            threshold: Array.from(Array(101), (_, i) => i / 100)
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.main} ref={containerRef}>

            <div className={styles.buttons}>
                <div className={styles.button}>
                    <img src="/garage-white.svg"/>
                </div>
                <div className={styles.button}>
                    <img src="/key.svg"/>
                </div>
            </div>


            <div className={styles.collapse}>
                <div
                    style={{
                        top: `${top}%`,
                        transform: `translate(50%, ${top}%)`,
                        borderRadius: `${borderRadius}px`,
                        width: `${size}%`,
                        height: `${size}svh`
                    }}
                />
            </div>

            <div className={styles.marque}>
                <Marquee speed={120}>
                    Apartments with an initial payment from $25,000 <span className={styles.marque_circle}></span>
                </Marquee>
            </div>
        </section>
    );
};

export default SecondScreen;