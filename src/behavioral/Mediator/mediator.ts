namespace Mediator {
  interface Mediator {
    notify: (sender: BaseComponent, event: string) => void
  }

  class BaseComponent {
    protected mediator!: Mediator

    public setMediator (mediator: Mediator) {
      this.mediator = mediator
    }
  }

  class ConcreteComponentA extends BaseComponent {
    operation () {
      console.log('Opration made by ConcreteComponentA.')
      this.mediator.notify(this, 'A')
    }
  }

  class ConcreteComponentB extends BaseComponent {
    operation () {
      console.log('Opration made by ConcreteComponentB.')
      this.mediator.notify(this, 'B')
    }
  }

  class ConcreteComponentX extends BaseComponent {
    operation () {
      console.log('Opration made by ConcreteComponentX.')
      this.mediator.notify(this, 'X')
    }
  }

  class ConcreteComponentY extends BaseComponent {
    operation () {
      console.log('Opration made by ConcreteComponentY.')
      this.mediator.notify(this, 'Y')
    }
  }

  class ConcreteMediator implements Mediator {
    private readonly _componentA: ConcreteComponentA
    private readonly _componentB: ConcreteComponentB
    private readonly _componentX: ConcreteComponentX
    private readonly _componentY: ConcreteComponentY

    constructor (componentA: ConcreteComponentA, componentB: ConcreteComponentB, componentX: ConcreteComponentX, componentY: ConcreteComponentY) {
      this._componentA = componentA
      this._componentA.setMediator(this)
      this._componentB = componentB
      this._componentB.setMediator(this)
      this._componentX = componentX
      this._componentX.setMediator(this)
      this._componentY = componentY
      this._componentY.setMediator(this)
    }

    notify (sender: BaseComponent, event: string) {
      if (event === 'A') {
        this._componentB.operation()
        this._componentY.operation()
      } else if (event === 'X') {
        this._componentA.operation()
        this._componentY.operation()
      }
    }
  }

  const componentA = new ConcreteComponentA()
  const componentB = new ConcreteComponentB()
  const componentX = new ConcreteComponentX()
  const componentY = new ConcreteComponentY()
  const mediator = new ConcreteMediator(componentA, componentB, componentX, componentY)

  componentA.operation()
  componentX.operation()
}
