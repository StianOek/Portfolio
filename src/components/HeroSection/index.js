import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroHWrapper, HeroH1, HeroH2, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Explore } from '../ExploreElement'
import Video from '../../videos/video.mp4'
import SocialFollow from '../SocialIcons/SocialFollow'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>

                <HeroHWrapper>
                    <HeroH1>Hi..</HeroH1>
                    <HeroH1>I'm Stian</HeroH1>
                    <HeroH2>Web Developer</HeroH2>
                    <HeroP>Front End Developer / Designer / UX</HeroP>

                </HeroHWrapper>
                <HeroBtnWrapper>
                    <Explore to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Say Hello {hover ? <ArrowForward /> : <ArrowRight />}
                    </Explore>
                    <SocialFollow />
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
