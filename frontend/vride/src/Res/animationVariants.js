//Navbar animation
export const navbarAnimation = {
    hidden : {
        y: -100
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 8,
        }
    }
}

//Site name animation.
export const titleAnimation = {
    hidden: {
        x: '-100vh',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 9,
            delay: 0.6
        }
    }
}

