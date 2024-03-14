namespace Visitor {
  interface Visitor {
    visitConcreteComponentA: (element: ConcreteComponentA) => void
    visitConcreteComponentB: (element: ConcreteComponentB) => void
  }

  interface Component {
    accept: (visitor: Visitor) => void
  }

  class ConcreteComponentA implements Component {
    accept (visitor: Visitor) {
      visitor.visitConcreteComponentA(this)
    }

    operrationA () {
      return 'ConcreteComponentA'
    }
  }

  class ConcreteComponentB implements Component {
    accept (visitor: Visitor) {
      visitor.visitConcreteComponentB(this)
    }

    operrationB () {
      return 'ConcreteComponentB'
    }
  }

  class ConcreteVisitor implements Visitor {
    visitConcreteComponentA (element: ConcreteComponentA) {
      console.log('Operiation was made for' + element.operrationA())
    }

    visitConcreteComponentB (element: ConcreteComponentB) {
      console.log('Operiation was made for' + element.operrationB())
    }
  }

  class Client {
    private readonly _components: Component[] = []

    private readonly _visitor: Visitor

    constructor (visitor: Visitor) {
      this._visitor = visitor
    }

    addComponent (component: Component) {
      this._components.push(component)
    }

    do () {
      for (const component of this._components) {
        component.accept(this._visitor)
      }
    }
  }

  const visitor = new ConcreteVisitor()
  const client = new Client(visitor)
  client.addComponent(new ConcreteComponentB())
  client.addComponent(new ConcreteComponentA())
  client.do()
}
