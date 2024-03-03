class Settings {
  private _language!: string
  private _theme!: string
  private static _instance: Settings

  private constructor () {}

  static getInstance (): Settings {
    if (Settings._instance !== null) {
      return Settings._instance
    } else {
      Settings._instance = new Settings()
      return Settings._instance
    }
  }

  public get theme (): string {
    return this._theme
  }

  public set theme (value: string) {
    this._theme = value
  }

  public get language (): string {
    return this._language
  }

  public set language (value: string) {
    this._language = value
  }
}
