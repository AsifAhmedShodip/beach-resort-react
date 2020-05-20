import styled from 'styled-components'
import dImage from '../images/defaultBcg.jpeg'

const StyledHero = styled.button`
    width: 100%;
    min-height: calc(60vh);
    background-image: url(${props=>props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border:none
`;

export default StyledHero;