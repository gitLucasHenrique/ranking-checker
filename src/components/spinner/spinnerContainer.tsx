import { Container } from "./spinner.styles";
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function SpinnerContainer({children, ...rest}: Props) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}