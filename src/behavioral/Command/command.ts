interface Command {
  execute: () => void
}

class SaveCommand implements Command {
  private readonly _receiver: HandleRequest
  private readonly _payload: string

  constructor (receiver: HandleRequest, payload: string) {
    this._receiver = receiver
    this._payload = payload
  }

  execute () {
    this._receiver.handle(this._payload)
  }
}

class Button {
  private _saveCommand!: Command

  setSave (command: Command) {
    this._saveCommand = command
  }

  onClick () {
    this._saveCommand.execute()
  }
}

class HandleRequest {
  handle (payload: string) {
    console.log('Request with payload: ' + payload + ' was handled!')
  }
}

const receiver = new HandleRequest()
const command = new SaveCommand(receiver, '"save this"')
const invoker = new Button()
invoker.setSave(command)
invoker.onClick()
