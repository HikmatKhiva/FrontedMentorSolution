export const fadeCard = (duration) => {
    return {
        initial: {
            y: 50,
            opacity: 0
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: '100',
                delay: duration * 200,
            }
        }
    }
}