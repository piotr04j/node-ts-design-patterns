namespace Iterator {

  interface ItrableCollection {
    createIterator: (type: 'Even' | 'Odd') => Iterator
  }

  interface Iterator {
    next: () => number | null
    hasMore: () => boolean
  }

  class EvenIterator implements Iterator {
    private _position: number = 0
    private readonly _collection: Collection

    constructor (collection: Collection) {
      this._collection = collection
    }

    next () {
      const items = this._collection.getItems()
      while (this.hasMore() && items[this._position] % 2 !== 0) {
        this._position++
      }
      const result = this._collection.getItems()[this._position]
      this._position++

      return result ?? null
    }

    hasMore () {
      return this._position < this._collection.getItems().length
    }
  }

  class OddIterator implements Iterator {
    private _position: number = 0
    private readonly _collection: Collection

    constructor (collection: Collection) {
      this._collection = collection
    }

    next () {
      const items = this._collection.getItems()
      while (this.hasMore() && items[this._position] % 2 === 0) {
        this._position++
      }
      const result = this._collection.getItems()[this._position]
      this._position++

      return result ?? null
    }

    hasMore () {
      return this._position < this._collection.getItems().length
    }
  }

  class Collection implements ItrableCollection {
    private readonly _items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    getItems (): number[] {
      return this._items
    }

    addItems (item: number) {
      this._items.push(item)
    }

    createIterator (type: 'Even' | 'Odd') {
      if (type === 'Even') {
        return new EvenIterator(this)
      } else {
        return new OddIterator(this)
      }
    }
  }

  class Client {
    private readonly _collection: ItrableCollection

    constructor (collection: ItrableCollection) {
      this._collection = collection
    }

    getAllEven () {
      const iterator = this._collection.createIterator('Even')
      while (iterator.hasMore()) {
        console.log(iterator.next())
      }
    }

    getAllOdd () {
      const iterator = this._collection.createIterator('Odd')
      while (iterator.hasMore()) {
        console.log(iterator.next())
      }
    }
  }

  const collection = new Collection()
  const client = new Client(collection)
  collection.addItems(10)
  client.getAllEven()
  client.getAllOdd()
}
