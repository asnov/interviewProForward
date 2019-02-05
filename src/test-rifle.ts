import { AutomaticRifle } from "./automatic-rifle";

const testAutomaticRifle = function (automaticRifle: AutomaticRifle): void {
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
