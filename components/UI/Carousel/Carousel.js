
import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

const carousel = () => {
    const carouselRef = useRef();
    let [counterState, setCounterState] = useState(1);

    useEffect(() => {
        carouselRef.current.style.scrollBehavior = "unset";
        carouselRef.current.scrollBy(carouselRef.current.clientWidth, 0);
    }, []);

    let intervalRef;

    useEffect(() => {
        intervalRef = setInterval(() => {
            setCounterState(++counterState);
            console.log(counterState);
            carouselRef.current.scrollTo(carouselRef.current.clientWidth * counterState, 0);
        }, 2000);
        return () => {
            clearInterval(intervalRef);
        }
    }, [counterState]);

    const onCarouselScrollHandler = () => {
        carouselRef.current.style.scrollBehavior = "smooth";
        const end = carouselRef.current.clientWidth + carouselRef.current.scrollLeft;
        const start = 0;
        // check if we've got to the end of scroll
        if( end + 5 >= carouselRef.current.scrollWidth ) {
            carouselRef.current.style.scrollBehavior = "unset";
            carouselRef.current.scrollTo(carouselRef.current.clientWidth, 0);
            setCounterState(1);
        }
        // check if we're at the beginning of scroll
        if(carouselRef.current.scrollLeft === start) {
            carouselRef.current.style.scrollBehavior = "unset";
            carouselRef.current.scrollTo(carouselRef.current.clientWidth * 4, 0);
            setCounterState(4);
        }
    }

    const onPrevHandler = () => {
        setCounterState(p => setCounterState(p-1));
        carouselRef.current.scrollTo(carouselRef.current.clientWidth * counterState, 0);
    }

    const onNextHandler = () => {
        setCounterState(p => setCounterState(p+1));
        carouselRef.current.scrollTo(carouselRef.current.clientWidth * counterState, 0);
    }

    const onScrollToPosHandler = ( pos ) => {
        carouselRef.current.scrollTo(carouselRef.current.clientWidth * pos, 0);
        setCounterState(pos);
    }

    return (
        <div className={styles.Carousel}>
            <div className={styles.Carousel__Conatiner} 
                ref={carouselRef}
                onScroll={onCarouselScrollHandler}>

                <div className={[styles.Carousel__Content, styles.Carousel__Content__Last_Clone].join(" ")}>
                    <img src="/images/heros/hero3.jpg" alt="banner" />
                    <div className={styles.Message__Card}>
                        <h2> Just In: Clarks most trending shoes </h2>
                        <p>Get yours with just a few clicks </p>
                        <button className={styles.Button}>Explore more</button>
                    </div>
                </div>

                <div className={styles.Carousel__Content}>
                    <img src="/images/heros/hero.jpg" alt="banner" />
                    <div className={styles.Message__Card}>
                        <h2> Just In: Clarks most trending shoes </h2>
                        <p>Get yours with just a few clicks </p>
                        <button className={styles.Button}>Explore more</button>
                    </div>
                </div>

                <div className={styles.Carousel__Content}>
                    <img src="/images/heros/hero1.jpg" alt="banner" />
                    <div className={styles.Message__Card}>
                        <h2> Just In: Clarks most trending shoes </h2>
                        <p>Get yours with just a few clicks </p>
                        <button className={styles.Button}>Explore more</button>
                    </div>
                </div>

                <div className={styles.Carousel__Content}>
                    <img src="/images/heros/hero2.jpg" alt="banner" />
                    <div className={styles.Message__Card}>
                        <h2> Just In: Clarks most trending shoes </h2>
                        <p>Get yours with just a few clicks </p>
                        <button className={styles.Button}>Explore more</button>
                    </div>
                </div>

                <div className={styles.Carousel__Content}>
                    <img src="/images/heros/hero3.jpg" alt="banner" />
                    <div className={styles.Message__Card}>
                        <h2> Just In: Clarks most trending shoes </h2>
                        <p>Get yours with just a few clicks </p>
                        <button className={styles.Button}>Explore more</button>
                    </div>
                </div>

                <div className={[styles.Carousel__Content, styles.Carousel__Content__First_Clone].join(" ")}>
                    <img src="/images/heros/hero.jpg" alt="banner" />
                    <div className={styles.Message__Card}>
                        <h2> Just In: Clarks most trending shoes </h2>
                        <p>Get yours with just a few clicks </p>
                        <button className={styles.Button}>Explore more</button>
                    </div>
                </div>

                <div className={styles.Carousel__Buttons}>
                    <span className={styles.PrevBtn} onClick={onPrevHandler}> <img src="/images/next.png"/> </span>
                    <span className={styles.NextBtn} onClick={onNextHandler}> <img src="/images/next.png"/> </span>
                </div>
            </div>

            <div className={styles.CircleButtons}>
                <span className={[styles.First, counterState === 1 ? styles.Active: ""].join(" ")} onClick={() => onScrollToPosHandler(1)}> 1 </span>
                <span className={[styles.Second, counterState === 2 ? styles.Active: ""].join(" ")} onClick={() => onScrollToPosHandler(2)}> 2 </span>
                <span className={[styles.Third, counterState === 3 ? styles.Active: ""].join(" ")} onClick={() => onScrollToPosHandler(3)}> 3 </span>
                <span className={[styles.Fourth, counterState === 4 ? styles.Active: ""].join(" ")} onClick={() => onScrollToPosHandler(4)}> 4 </span>
            </div>
        </div>
    );
};

export default carousel;
