namespace Strategy {
  interface Algorithm {
    exectue: (input: number) => void
  }

  class ConreteAlgorithmA implements Algorithm {
    exectue (input: number) {
      console.log(input * 2)
    }
  }

  class ConreteAlgorithmB implements Algorithm {
    exectue (input: number) {
      console.log(input * 4)
    }
  }

  class ConreteAlgorithmC implements Algorithm {
    exectue (input: number) {
      console.log(input * 6)
    }
  }

  class Context {
    private _strategy!: Algorithm

    setStrategy (strategy: Algorithm) {
      this._strategy = strategy
    }

    opertaion (value: number) {
      this._strategy.exectue(value)
    }
  }

  class Client {
    private readonly _context: Context

    constructor (context: Context) {
      this._context = context
    }

    doSomething () {
      this._context.opertaion(15)
    }
  }

  const context = new Context()
  const client = new Client(context)
  const strategy = new ConreteAlgorithmB()
  context.setStrategy(strategy)
  client.doSomething()
}
