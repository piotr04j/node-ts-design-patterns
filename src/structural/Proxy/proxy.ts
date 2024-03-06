namespace ProxyPattern {
  interface Account {
    operation: () => string
  }

  class CustomerAccount implements Account {
    operation () {
      return 'Operation is done.'
    }
  }

  class CustomerAccountProxy implements Account {
    private readonly _customerAccount: CustomerAccount
    constructor (customerAccount: CustomerAccount) {
      this._customerAccount = customerAccount
    }

    operation () {
      if (this.checkAccess()) {
        return this._customerAccount.operation()
      } else {
        return 'Access denied.'
      }
    }

    checkAccess () {
      return true
    }
  }

  class Client {
    private readonly _customerAccount: CustomerAccount
    constructor (customerAccount: CustomerAccount) {
      this._customerAccount = customerAccount
    }

    request () {
      console.log(this._customerAccount.operation())
    }
  }

  const customerAccount = new CustomerAccount()
  const customerAccountProxy = new CustomerAccountProxy(customerAccount)
  const client = new Client(customerAccountProxy)

  client.request()
}
