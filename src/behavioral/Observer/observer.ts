namespace Observer {
  interface Observer {
    execute: (payload: string, event: string) => void
  }

  class Subject {
    private readonly _observers: Observer[] = []

    attach (observer: Observer) {
      this._observers.push(observer)
    }

    detach (observer: Observer) {
      const observerIndex = this._observers.indexOf(observer)
      if (observerIndex === -1) {
        console.log('Subject: Nonexistent observer.'); return
      }

      this._observers.splice(observerIndex, 1)
      console.log('Subject: Detached an observer.')
    }

    notify (payload: string, event: string) {
      for (const observer of this._observers) {
        observer.execute(payload, event)
      }
    }
  }

  class ConcreteObserverA implements Observer {
    execute (payload: string, event: string) {
      if (event === 'A') {
        this.operation(payload)
      }
    }

    private operation (input: string) {
      console.log('Operation was made by ConcreteObserverA. The result: ' + input)
    }
  }

  class ConcreteObserverB implements Observer {
    execute (payload: string, event: string) {
      this.operation(payload)
    }

    private operation (input: string) {
      console.log('Operation was made by ConcreteObserverB. The result: ' + input)
    }
  }

  const concreteObserverA = new ConcreteObserverA()
  const concreteObserverB = new ConcreteObserverB()
  const subject = new Subject()
  subject.attach(concreteObserverA)
  subject.attach(concreteObserverB)
  subject.notify('a value', 'A')
  subject.detach(concreteObserverB)
  subject.notify('another value', 'A')
}
