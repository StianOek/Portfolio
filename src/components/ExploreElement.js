import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Explore = styled(Link)`
background: none;
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#fff' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: 1px solid #01bf71;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;


&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#01b742' : '#01Bf71')};
    border-radius: 40px;
}

`
