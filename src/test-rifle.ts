import { AutomaticRifle } from "./automatic-rifle";

const testAutomaticRifle = function (automaticRifle: any): void {
  automaticRifle.load(6);
  automaticRifle.fire();
  automaticRifle.fire();
  automaticRifle.load(3);
  automaticRifle.fire();
  automaticRifle.fire();
};

(() => {
  testAutomaticRifle(new AutomaticRifle(4));
  testAutomaticRifle(new AutomaticRifle());
})();
