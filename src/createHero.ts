import { HeroImpl } from './HeroImpl';

let hero: HeroImpl;

export function createHero() {
    return hero || (hero = new HeroImpl());
}
