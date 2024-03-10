namespace Decorator {
  interface Product {
    operation: () => string
  }

  class ConcreteProduct implements Product {
    operation () {
      return 'A ConcreteProduct operation was made.'
    }
  }

  class Decorator implements Product {
    protected readonly _product: Product

    constructor (product: Product) {
      this._product = product
    }

    operation () {
      return this._product.operation()
    }
  }

  class DecoratorA extends Decorator {
    operation () {
      return 'An additional operation was made by DecoratorA. ' + super.operation()
    }
  }

  class DecoratorB extends Decorator {
    operation () {
      return 'An additional operation was made by DecoratorB. ' + super.operation()
    }
  }

  class Client {
    doOperation (product: Product) {
      console.log(product.operation())
    }
  }

  const client = new Client()
  const product = new ConcreteProduct()
  const decoratorA = new DecoratorA(product)
  const decoratorB = new DecoratorB(decoratorA)
  client.doOperation(decoratorB)
}
