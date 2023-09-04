import { styled } from "styled-components";
import { GiCircleClaws } from 'react-icons/gi'

const PageWrapper = styled.div``

const Container = styled.div`
    display: flex;
    min-height: 100vh;
`

const RankedTypeContainer = styled.div`
    background-color: #418281;
    display: flex;
    padding: 1px;
    border-top-right-radius: 40px;
    justify-content: space-around;
`

const RankedType = styled.button<{selected: boolean}>`
    border-radius: 100%;
    height: 50px;
    width: 50px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border: none;
    display: inline-block;
    background-color: ${({ selected }) => (selected) ? "#FF8749" : "#D9D9D9"};
    cursor: pointer;
`

const InputContainer = styled.div`
    background-color: #BFFCFB;
    padding: 25px;
    padding-right: 30px;
`

const Input = styled.input`
    border-radius: 10px;
    min-width: 100%;
    min-height: 30px;
    padding-left: 5px;
`

const GetDataButton = styled.button`
    display: flex;
    padding: 10px;
    border: none;
    border-bottom-right-radius: 40px;
    background-color: ${({ disabled }) => (disabled) ? "#D9D9D9" : "#FF8749"};
    justify-content: center;
    align-items: center;
    user-select: none;
    font-weight: 700;
    cursor: ${({ disabled }) => (disabled) ? "not-allowed" : "pointer"};
`
const InputSection = styled.section`
    display: flex;
    flex: 2;
    flex-direction: column;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 9;
    justify-content: center;
`

const MidSection = styled.section`
    display: flex;
    flex: 7;
    background: linear-gradient(90deg, rgba(0,80,80,1) 5%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(0,80,80,1) 95%);
`

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`

const EndSection = styled.section`
    display: flex;
    flex: 1;
    align-items: end;
`

const GitImageContainer = styled.div`
    bottom: 0;
    right: 0;
    padding: 10px 10px 6px 10px;
    margin: 2rem;
    position: absolute;
    border-radius: 50%;
    background-color: black;
    transform: scale(1);
	

    &:hover {
        cursor: pointer;
        animation: pulse 1s infinite;
        @keyframes pulse {
	        0% {
	        	transform: scale(0.95);
	        	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	        }

	        70% {
	        	transform: scale(1);
	        	box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	        }

	        100% {
	        	transform: scale(0.95);
	        	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	        }
        }
    }
`

const SpinnerIcon = styled(GiCircleClaws)`
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

const GitImage = styled.img`
    width: 40px;
    height: 40px;
`

const EmblemImage = styled.img``

export {
    PageWrapper,
    Container,
    RankedTypeContainer,
    RankedType,
    InputContainer,
    Input,
    FormContainer,
    GetDataButton,
    MidSection,
    MainContent,
    EndSection,
    GitImageContainer,
    GitImage,
    EmblemImage,
    SpinnerIcon,
    InputSection,
}