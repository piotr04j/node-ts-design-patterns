interface Car {
  run: (destination: string) => void
  isWork: () => boolean
}

abstract class CarFactory {
  abstract createCar (): Car

  isGoodCondition (car: Car) {
    return car.isWork()
  }
}

class SportCar implements Car {
  private readonly _isNew: boolean

  constructor (isNew: boolean) {
    this._isNew = isNew
  }

  run (destination: string) {
    console.log('It is running to' + destination)
  }

  isWork () {
    return this._isNew
  }
}

class SuvCar implements Car {
  private readonly _isNew: boolean

  constructor (isNew: boolean) {
    this._isNew = isNew
  }

  run (destination: string) {
    console.log('It is running to' + destination)
  }

  isWork () {
    return this._isNew
  }
}

class SportCarFactory extends CarFactory {
  createCar () {
    return new SportCar(true)
  }
}

class SuvCarFactory extends CarFactory {
  createCar () {
    return new SuvCar(true)
  }
}

class Insurer {
  isCarWorks (car: Car) {
    if (car.isWork()) {
      return true
    } else {
      return false
    }
  }
}

const suvCarFactory = new SuvCarFactory()
const insurer = new Insurer()
const sportCarFactory = new SportCarFactory()
const sportCar = sportCarFactory.createCar()

if (insurer.isCarWorks(sportCar)) {
  console.log('Send offers')
} else {
  console.log('Recommend to check condition in factory.')
  sportCarFactory.isGoodCondition(sportCar)
}
