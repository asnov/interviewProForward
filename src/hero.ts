export interface Hero {
  // Rifle shooting
  fire(): void;

  // Load or reload rifle
  loadRifle(): void;

  // Number of available (loaded) shots of Rifle
  shoutNumber(): number;

  hasRifle(): boolean;
}
