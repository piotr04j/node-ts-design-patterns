namespace AbstractFactory {
  interface TravelAgency {
    createPlanceTicker: () => PlaneTicket

    findHotel: () => Hotel
  }

  abstract class PlaneTicket {
    abstract calculatePrice (): string
  }

  abstract class Hotel {
    abstract bookRoom (): string
  }

  class BudgetPlaneTicket extends PlaneTicket {
    calculatePrice (): string {
      return 'Budget plane ticket price is 30$'
    }
  }

  class BusinessPlaneTicket extends PlaneTicket {
    calculatePrice (): string {
      return 'Business plane ticket price is 30$'
    }
  }

  class BudgetHotel extends Hotel {
    bookRoom (): string {
      return 'Budget room is booked.'
    }
  }

  class BusinessHotel extends Hotel {
    bookRoom (): string {
      return 'Business room is booked.'
    }
  }

  class BudgetTravelAgency implements TravelAgency {
    createPlanceTicker () {
      return new BudgetPlaneTicket()
    }

    findHotel () {
      return new BudgetHotel()
    }
  }

  class BusinessTravelAgency implements TravelAgency {
    createPlanceTicker () {
      return new BusinessPlaneTicket()
    }

    findHotel () {
      return new BusinessHotel()
    }
  }

  class Client {
    private readonly _factory: TravelAgency
    private readonly _hotel: Hotel

    constructor (private readonly factory: TravelAgency) {
      this._factory = factory
      this._hotel = this._factory.findHotel()
    }

    bookRoom () {
      console.log(this._hotel.bookRoom())
    }
  }

  const client = new Client(new BudgetTravelAgency())
  client.bookRoom()
}
