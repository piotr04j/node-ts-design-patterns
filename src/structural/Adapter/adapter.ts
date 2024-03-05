namespace Adapter {
  interface WeatherStation {
    getTemperatureInDegreesCelsius: () => number
  }

  class EuropeanWeatherApp {
    private readonly _weatherStation: WeatherStation

    constructor (weatherStation: WeatherStation) {
      this._weatherStation = weatherStation
    }

    showTemperature () {
      console.log('The temperature is ' + String(this._weatherStation.getTemperatureInDegreesCelsius()) + ' centigrade.')
    }
  }

  class EuropeanWeatherStation implements WeatherStation {
    getTemperatureInDegreesCelsius () {
      return 20
    }
  }

  class USWeatherStation {
    getTemperatureInDegreesFahrenheit () {
      return 68
    }
  }

  class USWeatherStationAdapter extends EuropeanWeatherStation {
    private readonly _USWeatherStation: USWeatherStation

    constructor (uSWeatherStation: USWeatherStation) {
      super()
      this._USWeatherStation = uSWeatherStation
    }

    getTemperatureInDegreesCelsius () {
      return (this._USWeatherStation.getTemperatureInDegreesFahrenheit() - 32) * 5 / 9
    }
  }

  const usWeatherStation = new USWeatherStation()
  const europeanWeatherStation = new USWeatherStationAdapter(usWeatherStation)
  const app = new EuropeanWeatherApp(europeanWeatherStation)
  app.showTemperature()
}
