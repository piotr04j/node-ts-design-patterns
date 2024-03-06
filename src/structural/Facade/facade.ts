namespace Facade {
  class ComplicatedApiOne {
    doOperationA () {
      console.log('Operation A is done')
    }

    doOperationB () {
      console.log('Operation A is done')
    }

    doOperationC () {
      console.log('Operation A is done')
    }
  }

  class ComplicatedApiTwo {
    doOperationX () {
      console.log('Operation X is done')
    }

    doOperationY () {
      console.log('Operation Y is done')
    }

    doOperationZ () {
      console.log('Operation Z is done')
    }
  }

  class Facade {
    private readonly _complicatedApiOne: ComplicatedApiOne
    private readonly _complicatedApiTwo: ComplicatedApiTwo

    constructor (complicatedApiOne: ComplicatedApiOne, complicatedApiTwo: ComplicatedApiTwo) {
      this._complicatedApiOne = complicatedApiOne
      this._complicatedApiTwo = complicatedApiTwo
    }

    doOpertaionOne () {
      this._complicatedApiOne.doOperationB()
      this._complicatedApiTwo.doOperationY()
    }
  }

  class Client {
    private readonly _facade: Facade
    constructor (facade: Facade) {
      this._facade = facade
    }

    doOperation () {
      this._facade.doOpertaionOne()
    }
  }

  const complicatedApiOne = new ComplicatedApiOne()
  const complicatedApiTwo = new ComplicatedApiTwo()
  const facade = new Facade(complicatedApiOne, complicatedApiTwo)
  const client = new Client(facade)
  client.doOperation()
}
