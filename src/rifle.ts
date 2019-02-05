export class Rifle {
  private shotNumber: number = 0;

  public constructor(private maxMagazineCapacity: number = null) {
  }

  public getShotNumber(): number {
    return this.shotNumber;
  }

  public load(magazineCapacity: number = this.maxMagazineCapacity || 0): void {
    if(this.maxMagazineCapacity !== null) {
      magazineCapacity = Math.min(this.maxMagazineCapacity, magazineCapacity);
    }
    this.shotNumber = magazineCapacity;
  }

  public fire(): void {
    if (this.shotNumber > 0) {
      this.shotNumber--;
      console.info(`Shoot. Shots left ${this.shotNumber}`);
    } else {
      console.info("Empty.");
    }
  }
}
