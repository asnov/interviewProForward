import { AutomaticRifle } from './automatic-rifle';


describe('Automatic rifle', () => {
    let rifle: AutomaticRifle;

    beforeEach(() => {
        rifle = new AutomaticRifle();
        rifle.load(10);
    });

    describe('uses burst fire', () => {
        it('every call of fire function does 3 shots - number of shots', () => {
            const startShotNumber = rifle.getShotNumber();
            rifle.fire();
            expect(startShotNumber - rifle.getShotNumber()).toBe(3);
        });
    });

    it('The number of shots is the hard-coded static constant of AutomaticRifle class', () => {
        expect(AutomaticRifle.BURST_FIRE_SHOTS_NUMBER).toBe(3);
    });

    describe('If the number of the available shots is less than the number of shots', () => {
        const consoleInfoSpy = jasmine.createSpy('console.info spy');

        it('Console should write message “Empty.” and stop the execution of the method', () =>{
            console.info = consoleInfoSpy;
            rifle.load(2);
            rifle.fire();
            expect(console.info).toHaveBeenCalledTimes(1);
            expect(console.info).toHaveBeenCalledWith(`Empty.`);
        });
    });

});
