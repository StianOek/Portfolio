import React from 'react'
import { Explore } from '../ExploreElement'
import alias from '../../images/svg-1.svg'

import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements'

const AboutSection = ({ lightBg, id, imgStart, lighTextDesc, toppLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{toppLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Explore to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Explore>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={alias} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection
