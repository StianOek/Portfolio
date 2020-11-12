import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FaArrowRight, FaBookReader, FaRavelry } from 'react-icons/fa'

export default function SocialFollow() {
    return (
        <div className="social-container">
            <a href="#" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="#" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="#" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" /></a>

        </div>
    )
} 