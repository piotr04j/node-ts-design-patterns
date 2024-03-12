namespace TemplateMethod {
  abstract class Developer {
    createApplication () {
      this.goToWork()
      this.turnOnComputer()
      this.createCode()
      this.makeTests()
    }

    protected goToWork () {
      console.log('Developer is at work.')
    }

    protected turnOnComputer () {
      console.log('The computer is ready to work.')
    }

    protected abstract createCode (): void

    protected abstract makeTests (): void
  }

  class JavaDeveloper extends Developer {
    protected createCode (): void {
      console.log('The Java app is ready.')
    }

    protected makeTests (): void {
      console.log('The Java app has been tested.')
    }
  }

  class PythonDeveloper extends Developer {
    protected createCode (): void {
      console.log('The Python app is ready.')
    }

    protected makeTests (): void {
      console.log('The Python app has been tested.')
    }
  }

  class SoftwareHouse {
    private _developer!: Developer

    setDeveloper (developer: Developer) {
      this._developer = developer
    }

    makeApp () {
      this._developer.createApplication()
    }
  }

  const javaDeveloper = new JavaDeveloper()
  const softwareHouse = new SoftwareHouse()

  softwareHouse.setDeveloper(javaDeveloper)
  softwareHouse.makeApp()
}
