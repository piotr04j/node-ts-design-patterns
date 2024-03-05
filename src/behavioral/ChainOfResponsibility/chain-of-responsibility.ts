namespace ChainOfResponsibility {
  interface Handler {
    handle: (input: string) => string | null
    setHandler: (handler: Handler) => Handler
  }

  abstract class AbstractHandler implements Handler {
    private _nextHandler: Handler | null = null

    public setHandler (handler: Handler): Handler {
      this._nextHandler = handler
      return handler
    }

    public handle (input: string) {
      if (this._nextHandler !== null) {
        return this._nextHandler.handle(input)
      }

      return null
    }
  }

  class HandlerOne extends AbstractHandler {
    public handle (input: string) {
      if (input === 'One') {
        return 'Handled by HandlerOne'
      }

      return super.handle(input)
    }
  }

  class HandlerTwo extends AbstractHandler {
    public handle (input: string) {
      if (input === 'Two') {
        return 'Handled by HandlerTwo'
      }

      return super.handle(input)
    }
  }

  class HandlerThree extends AbstractHandler {
    public handle (input: string) {
      if (input === 'Three') {
        return 'Handled by HandlerThree'
      }

      return super.handle(input)
    }
  }

  class Client {
    private readonly _handlers!: Handler[]

    process (request: 'One' | 'Two' | 'Three', handler: Handler) {
      console.log(handler.handle(request))
    }
  }

  const client = new Client()
  const handlerOne = new HandlerOne()
  const handlerTwo = new HandlerTwo()
  const handlerThree = new HandlerThree()
  handlerOne.setHandler(handlerTwo).setHandler(handlerThree)
  client.process('Two', handlerOne)

}
