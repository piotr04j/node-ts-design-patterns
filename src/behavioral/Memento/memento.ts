namespace Memento {
  interface Memento {
    getState: () => number[]
    getDate: () => Date
  }

  class ConcreteMemento implements Memento {
    private readonly _date: Date
    private readonly _state: number[]

    constructor (date: Date, state: number[]) {
      this._date = date
      this._state = state
    }

    getDate () {
      return this._date
    }

    getState () {
      return this._state
    }
  }

  class Originator {
    private _state!: number[]

    operation () {
      this._state = this._generateState()
      console.log(this._state)
    }

    private _generateState () {
      return [Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)]
    }

    save () {
      return new ConcreteMemento(new Date(), this._state)
    }

    retore (memento: Memento) {
      this._state = memento.getState()
      console.log(this._state)
    }
  }

  class Caretaker {
    private readonly _mementos: Memento[] = []
    private readonly _originator: Originator

    constructor (originator: Originator) {
      this._originator = originator
    }

    undo () {
      const memento = this._mementos.pop()
      if (memento !== undefined) {
        this._originator.retore(memento)
      }
    }

    backup () {
      const memento = this._originator.save()
      this._mementos.push(memento)
    }
  }

  const originator = new Originator()
  const caretaker = new Caretaker(originator)
  originator.operation()
  caretaker.backup()
  originator.operation()
  caretaker.backup()
  originator.operation()
  caretaker.undo()
  caretaker.undo()
}
