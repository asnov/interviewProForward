import { Rifle } from './rifle';

export class AutomaticRifle extends Rifle {
    static BURST_FIRE_SHOTS_NUMBER = 3;

    /*****
     * my variant
     */
    fire() {
        if (this.getShotNumber() < AutomaticRifle.BURST_FIRE_SHOTS_NUMBER) {
            console.info(`Empty.`);             // (${this.getShotNumber()} shots is not enough for burst fire)
            return;
        }
        for (let i = 0; i < AutomaticRifle.BURST_FIRE_SHOTS_NUMBER; i++) {
            super.fire();
        }
    }

    /*****
     * variant from Mike does not satisfy point 3 of the requirements
     */
    public fire_m(): void {
        let shotsNumber = Math.min(AutomaticRifle.BURST_FIRE_SHOTS_NUMBER, this.getShotNumber() + 1);
        while (shotsNumber > 0) {
            super.fire();
            shotsNumber--;
        }
    }

}
