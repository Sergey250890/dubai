import { motion } from 'framer-motion';
interface Props {
    text: string,
    className?: string;
}
const AnimatedText = ({ text, className, ...props }: Props) => {
    const lines = text.split('<br/>')
    return (
        <div>
            {lines.map((line, index) => (
                <div key={index} style={{overflow: 'hidden'}}>
                    <motion.div
                        initial={{y: '100%', scale: 0.8}}
                        animate={{y: '0%', scale: 1}}
                        transition={{duration: 0.5, delay: index * 0.05}}
                        style={{textWrap: 'nowrap'}}
                        className={className}
                        {...props}
                    >
                        <span dangerouslySetInnerHTML={{__html: line}}></span>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};
export default AnimatedText;
