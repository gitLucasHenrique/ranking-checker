import { HTMLAttributes, ReactNode } from 'react';
import { Container } from './emptyContent.styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function EmptyContentContainer({children, ...rest}: Props) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}