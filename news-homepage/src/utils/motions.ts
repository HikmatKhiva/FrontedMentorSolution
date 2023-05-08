export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}
export const fadeIn = (delay: number = .2, duration: number, direction: string) => {
    return {
        hidden: {
            y: direction === 'bottom' ? 100 : direction === 'top' ? -100 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            opacity: 0
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                delay,
                duration,
                ease: 'easeOut'
            }
        }
    }
}

