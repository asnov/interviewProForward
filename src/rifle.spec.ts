import { Rifle } from './rifle';


describe('Rifle', () => {
    let rifle: Rifle;


    describe('as a class', () => {
        beforeEach(() => {
            rifle = new Rifle();
        });

        it(`should exist`, () => {
            expect(rifle).toBeTruthy();
        });

        it('should has getShotNumber() method', () => {
            expect(typeof rifle.getShotNumber).toBe('function');
        });

        it('should has load() method', () => {
            expect(typeof rifle.load).toBe('function');
        });

        it('should has fire() method', () => {
            expect(typeof rifle.fire).toBe('function');
        });
    });


    const MAX_MAGAZINE_CAPACITY = 5;
    describe(`with limited max magazine capacity, for instance ${MAX_MAGAZINE_CAPACITY}`, () => {

        beforeEach(() => {
            rifle = new Rifle(MAX_MAGAZINE_CAPACITY);
        });

        it('goes empty from the factory', () => {
            expect(rifle.getShotNumber()).toBe(0);
        });

        describe('its load() method', () => {
            it('should load its max magazine capacity by default', () => {
                rifle.load();
                expect(rifle.getShotNumber()).toBe(MAX_MAGAZINE_CAPACITY);
            });
            describe('should load riffle any particular number of bullets', () => {
                for (let i = -3; i < MAX_MAGAZINE_CAPACITY; i++) {
                    it(`should load ${i} bullets from ${i} bullets magazine`, () => {
                        rifle.load(i);
                        expect(rifle.getShotNumber()).toBe(i);
                    });
                }
            });
            describe('should not load more than max magazine capacity bullets', () => {
                for (let i = MAX_MAGAZINE_CAPACITY; i < MAX_MAGAZINE_CAPACITY + 3; i++) {
                    it(`should load ${MAX_MAGAZINE_CAPACITY} from ${i} bullets magazine`, () => {
                        rifle.load(i);
                        expect(rifle.getShotNumber()).toBe(MAX_MAGAZINE_CAPACITY);
                    });
                }
            });
        });

    });


    describe('with unlimited max magazine capacity', () => {
        beforeEach(() => {
            rifle = new Rifle();
        });

        it('goes empty from the factory', () => {
            expect(rifle.getShotNumber()).toBe(0);
        });

        describe('its load() method', () => {

            it('should load 0 bullets by default', () => {
                rifle.load();
                expect(rifle.getShotNumber()).toBe(0);
            });

            describe('should load riffle any number of bullets', () => {
                for (let i = -3; i < 11; i++) {
                    it(`should load ${i} bullets from ${i} bullets magazine`, () => {
                        rifle.load(i);
                        expect(rifle.getShotNumber()).toBe(i);
                    });
                }
            });

        });

    });


    describe('fire() method', () => {
        const MAGAZINE_CAPACITY = 15;
        const consoleInfoSpy = jasmine.createSpy('console.info spy');

        beforeEach(() => {
            rifle = new Rifle();
            console.info = consoleInfoSpy;
        });

        it('should decrease the number of available shots', () => {
            for (let i = 1; i < MAGAZINE_CAPACITY; i++) {
                rifle.load(i);
                expect(rifle.getShotNumber()).toBe(i);
                rifle.fire();
                expect(rifle.getShotNumber()).toBe(i - 1);
            }
        });

        it('should print console message every time', () => {
            rifle.load(MAGAZINE_CAPACITY);
            for (let i = MAGAZINE_CAPACITY; i--;) {
                rifle.fire();
                expect(console.info).toHaveBeenCalledWith(`Shoot. Shots left ${i}`);
            }
        });

        it('should must report if ammo runs out', () => {
            rifle.load(0);
            rifle.fire();
            expect(console.info).toHaveBeenCalledWith(`Empty.`);
        });
    });


});
