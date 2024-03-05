/* eslint-disable accessor-pairs */
namespace Bridge {
  interface Abstraction {
    buttonClick: () => void
    signUp: () => void
  }

  interface Implementation {
    doOperationA: () => void
    doOperationB: () => void
    doOperationC: () => void
  }

  class AbstractionOne implements Abstraction {
    private readonly _api: Implementation
    constructor (api: Implementation) {
      this._api = api
    }

    buttonClick (): void {
      this._api.doOperationA()
    }

    signUp (): void {
      this._api.doOperationB()
      this._api.doOperationC()
    }
  }

  class ImplementationOne implements Implementation {
    doOperationA (): void {
      console.log('Operation One A was made.')
    }

    doOperationB (): void {
      console.log('Operation One B was made.')
    }

    doOperationC (): void {
      console.log('Operation One C was made.')
    }
  }

  class ImplementationTwo implements Implementation {
    doOperationA (): void {
      console.log('Operation Two A was made.')
    }

    doOperationB (): void {
      console.log('Operation Two B was made.')
    }

    doOperationC (): void {
      console.log('Operation Two C was made.')
    }
  }

  class Client {
    private _abstraction!: Abstraction

    public set abstraction (value: Abstraction) {
      this._abstraction = value
    }

    sendRequest () {
      this._abstraction.buttonClick()
    }
  }

  const client = new Client()
  const abstraction = new AbstractionOne(new ImplementationTwo())
  client.abstraction = abstraction
  client.sendRequest()
}
