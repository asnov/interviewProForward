import { Hero } from './hero';
import { Rifle } from './rifle';
import { AutomaticRifle } from './automatic-rifle';

let hero: HeroImpl;

export class HeroImpl implements Hero {

    static create() {
        return hero || (hero = new HeroImpl());
    }


    constructor(private rifle?: Rifle | AutomaticRifle) {
    }

    // Rifle shooting
    fire(): void {
        this.rifle.fire();
    }

    // Load or reload rifle
    loadRifle(): void {
        this.rifle.load();
    }

    // Number of available (loaded) shots of Rifle
    shoutNumber(): number {
        return this.rifle.getShotNumber();
    }

    hasRifle(): boolean {
        return !!this.rifle;
    }

    switchRifle(rifle: Rifle | AutomaticRifle) {
        this.rifle = rifle;
    }

}
