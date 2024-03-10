namespace Flyweight {
  type ItemSize = 'small' | 'medium' | 'big'

  class Item {
    private readonly _lat: number
    private readonly _long: number
    private readonly _flyweight: Flyweight

    constructor (lat: number, long: number, flyweight: Flyweight) {
      this._lat = lat
      this._long = long
      this._flyweight = flyweight
    }

    putItemOnMap () {
      console.log(`Item with type: ${this._flyweight.getType()} with lat: ${this._lat} and long ${this._long} is on the map.`)
    }
  }

  class Flyweight {
    private readonly _color: string
    private readonly _type: ItemSize

    constructor (color: string, type: ItemSize) {
      this._color = color
      this._type = type
    }

    getType () {
      return `color: ${this._color} and size: ${this._type}`
    }
  }

  class FlyweightFactory {
    private readonly _cache: Record<string, Flyweight> = {}

    getFlyweight (color: string, type: ItemSize) {
      const key = color + type
      if (this._cache[key] !== undefined) {
        return this._cache[key]
      } else {
        const flyweight = new Flyweight(color, type)
        this._cache[key] = flyweight
        return this._cache[key]
      }
    }
  }

  class Client {
    addItemToMap (lat: number, long: number, color: string, type: ItemSize) {
      const flyweightFactory = new FlyweightFactory()
      const flyweight = flyweightFactory.getFlyweight(color, type)
      const item = new Item(lat, long, flyweight)
      item.putItemOnMap()
    }
  }

  const client = new Client()
  client.addItemToMap(10, 32, 'green', 'medium')
}
