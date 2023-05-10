export const heroMotion = {
    img: {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        }
    }
}
export const titleAnimation = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: '100',
            delay: 100,
        },
    }
}
export const subTitleAnimation = {
    initial: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: '100',
            delay: 150,
        },
    }
}
export const buttonAnimate = (direction) => {
    return {
        initial: {
            opacity: 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'top' ? 100 : direction === 'bottom' ? -100 : 0
        },
        visible: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: '100',
                duration: 100
            },
        }
    }
}
export const productive = {
    imageAnimate: {
        initial: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: '100',
                duration: 100
            }
        }
    },
    titleContent: {
        enter: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: '200',
                duration: 200
            }
        }
    }
}
export const accessAnimation = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: '200',
            delay: 300,
        }
    }
}
export const socialAnimate = (duration) => {
    return {
        initial: {
            opacity: 0,
            scale: .5
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: '100',
                delay: duration * 200,
            }
        }
    }
}
export const itemAnimate = (duration, direction) => {
    return {
        initial: {
            opacity: 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'top' ? 100 : direction === 'bottom' ? -100 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: '100',
                delay: duration * 200,
            }
        }
    }
} 