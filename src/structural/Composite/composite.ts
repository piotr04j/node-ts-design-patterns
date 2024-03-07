namespace Composite {

  interface Component {
    operation: () => string
  }

  class LeafA implements Component {
    operation () {
      return 'A leaf operation A was made!'
    }
  }

  class LeafB implements Component {
    operation () {
      return 'A leaf operation B was made!'
    }
  }

  class LeafC implements Component {
    operation () {
      return 'A leaf operation C was made!'
    }
  }

  class Composite implements Component {
    private readonly _children: Component[] = []

    add (item: Component) {
      this._children.push(item)
    }

    remove (item: Component) {
      this._children.pop()
    }

    getChildren () {
      return this._children
    }

    operation (): string {
      const result = []
      for (const component of this._children) {
        result.push(component.operation())
      }

      return 'There were made: ' + result.length + ' operations. ' + 'List of them: ' + result.join(' ')
    }
  }

  class Client {
    private readonly _component: Component

    constructor (component: Component) {
      this._component = component
    }

    execute () {
      console.log(this._component.operation())
    }
  }

  const leafA = new LeafA()
  const leafB = new LeafB()
  const leafC = new LeafC()
  const tree = new Composite()
  const branch = new Composite()
  branch.add(leafA)
  branch.add(leafB)
  tree.add(leafC)
  tree.add(branch)
  const client = new Client(tree)
  client.execute()
}
