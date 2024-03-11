namespace State {
  class Context {
    private _state: BaseState

    constructor (initState: BaseState) {
      this._state = initState
      this._state.setContext(this)
    }

    executeA () {
      this._state.operationA()
    }

    executeB () {
      this._state.operationB()
    }

    changeState (state: BaseState) {
      console.log('State changed to: ' + state.constructor.name)
      this._state = state
      state.setContext(this)
    }
  }

  abstract class BaseState {
    protected _context!: Context

    setContext (context: Context) {
      this._context = context
    }

    abstract operationA (): void

    abstract operationB (): void
  }

  class ConcreteStateX extends BaseState {
    operationA () {
      console.log('OperationA was made by ConcreteStateX')
      this._context.changeState(new ConcreteStateY())
    }

    operationB () {
      console.log('OperationB was made by ConcreteStateX')
      this._context.changeState(new ConcreteStateZ())
    }
  }

  class ConcreteStateY extends BaseState {
    operationA () {
      console.log('OperationA was made by ConcreteStateY')
    }

    operationB () {
      console.log('OperationB was made by ConcreteStateY')
      this._context.changeState(new ConcreteStateZ())
    }
  }

  class ConcreteStateZ extends BaseState {
    operationA () {
      console.log('OperationA was made by ConcreteStateZ')
      this._context.changeState(new ConcreteStateX())
    }

    operationB () {
      console.log('OperationB was made by ConcreteStateZ')
    }
  }

  const context = new Context(new ConcreteStateX())
  context.executeA()
}
