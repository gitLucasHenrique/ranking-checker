import Platypus from '@/assets/platypus.svg'
import { Center } from "./spinner.styles";

export function SpinnerInside() {
    return (
        <Center
            src={Platypus.src}
            alt='loding spinner'
            height={Platypus.height / 1.1}
            width={Platypus.width / 1.1}
            priority
        />
    )
}