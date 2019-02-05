import { Rifle } from './rifle';

export class AutomaticRifle extends Rifle {
    private static BURST_FIRE_SHOTS_NUMBER = 3;

    // fire() {
    //     if (this.getShotNumber() < AutomaticRifle.BURST_FIRE_SHOTS_NUMBER) {
    //         this.load(0);
    //         super.fire();
    //         return;
    //     }
    //     for (let i = 0; i < AutomaticRifle.BURST_FIRE_SHOTS_NUMBER; i++) {
    //         super.fire();
    //     }
    // }

    public fire(): void {
        let shotsNumber = Math.min(AutomaticRifle.BURST_FIRE_SHOTS_NUMBER, this.getShotNumber() + 1);
        while (shotsNumber > 0) {
            super.fire();
            shotsNumber--;
        }
    }

}

// for (let i = 0; i < shotsNumber; i++) {
//     super.fire();
// }
