import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { selectAllFrontItems } from './frontSlice'
import { Link } from 'react-router-dom';


const FrontDisplayCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const frontitems = useSelector(selectAllFrontItems);
    console.log('frontitems:', frontitems);
    const isLoading = useSelector((state) => state.frontitems.isLoading);
    const errorMsg = useSelector((state) => state.frontitems.errorMsg);

    const itemLength = frontitems.length - 1


    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    if (isLoading) {
        return (
            <LoadingMessage />
        );
    }

    if (errorMsg) {
        return (
            <ErrorMessage errorMsg={errorMsg} />
        );
    }

    if (frontitems && frontitems.length > 0) {
        const carouselItemData = frontitems.map((item) => {
            return (
                <CarouselItem
                    key={item.src}
                    onExited={() => setAnimating(false)}
                    onExiting={() => setAnimating(true)}
                >
                    <Link to={'/about'}><img id='uc' src={item.src} alt={item.altText} /></Link>
                </CarouselItem>
            );
        });
        return (
            <div style={{
                display: 'block', width: 1200, padding: 30
            }}>
                <div className='text-center'><h6>Welcome to the Guide</h6></div>
                <Carousel previous={previousButton} next={nextButton}
                    activeIndex={activeIndex}>
                    <CarouselIndicators items={frontitems}
                        activeIndex={activeIndex}
                        onClickHandler={(newIndex) => {
                            if (animating) return;
                            setActiveIndex(newIndex);
                        }} />
                    {carouselItemData}
                    <CarouselControl className='carousel-control' directionText="Prev"
                        direction="prev" onClickHandler={previousButton} />
                    <CarouselControl className='carousel-control' directionText="Next"
                        direction="next" onClickHandler={nextButton} />
                </Carousel>
            </div >
        );
    };
}

export default FrontDisplayCarousel;