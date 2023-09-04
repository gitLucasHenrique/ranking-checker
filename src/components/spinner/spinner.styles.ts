import { styled } from "styled-components";
import { GiCircleClaws } from "react-icons/gi";
import Image from "next/image";

const Outside = styled(GiCircleClaws)`
    font-size: 150px;
    color: #005050;
    animation: spin 1.5s infinite;
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const Center = styled(Image)`
    position: absolute;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    Outside,
    Center,
    Container
}