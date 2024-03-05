namespace Prototype {
  interface Prototype<T> {
    clone: () => T
  }

  class Sheep implements Prototype<Sheep> {
    private readonly _name: string

    constructor (name: string) {
      this._name = name
    }

    clone () {
      return new Sheep(this._name)
    }

    public get name (): string {
      return this._name
    }
  }

  const dolly = new Sheep('Dolly')
  const clonedDolly = dolly.clone()
  console.log(dolly.name === clonedDolly.name)
}
