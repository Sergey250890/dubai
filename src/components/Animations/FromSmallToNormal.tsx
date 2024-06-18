import {motion} from "framer-motion";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}
const FromSmallToNormal = ({children, ...props}:Props) => {
    return (
        <motion.div
            initial={{scale: '0%'}}
            animate={{scale: '100%'}}
            transition={{duration: 0.7}}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default FromSmallToNormal;