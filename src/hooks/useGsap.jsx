import { gsap, Power3 } from 'gsap';

export const useGsap = () => {
    const tl = new gsap.timeline();
    const ease = Power3.easeOut();

    return [tl, ease];
};
