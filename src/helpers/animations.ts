
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin); 

export const fadeUp = ( elementIdOrClass: string , duration: number, delay: number = 0) => {
  gsap.fromTo(
    elementIdOrClass,
    { y: 100, fill: 'blue', opacity: 0}, 
    { y: 0, fill: 'green', opacity: 1, duration: duration, delay: delay},
  );
}

export const fadeUpOnView = ( elementIdOrClass: gsap.TweenTarget , duration: number, delay: number = 0) => {
  gsap.fromTo(
    elementIdOrClass,
    { y: 100, fill: 'blue', opacity: 0}, 
    { y: 0, fill: 'green', opacity: 1, duration: duration, delay: delay, scrollTrigger: elementIdOrClass},
  );
}

export const elasticSpawn = (targetId: string, duration: number = 0.8, delay: number = 0) => {
  gsap.fromTo(
    targetId,
    {
      scale: 0,
      opacity: 0,
    },
    {
      ease: "elastic",
      duration: duration,
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        once: true,
        trigger: targetId,
        onUpdate: (self) => {
          console.log(self);
          
          console.log(self.end, 'elasticSpawn');
        },
      },
      delay: delay,
    }
  );
}