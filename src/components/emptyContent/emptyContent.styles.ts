import { MdOutlineContentPasteSearch } from "react-icons/md";
import { styled } from "styled-components";

const Icon = styled(MdOutlineContentPasteSearch)`
    font-size: 5rem;
    color: #005050;
`

const Message = styled.p`
    color: #005050;
    font-size: 1.3rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export {
    Container,
    Icon,
    Message
}