class VideoGame {
  private _title: string | undefined
  private _genre: string | undefined
  private _platform: string | undefined
  private _isMultiplayer: boolean | undefined

  public get title (): string | undefined {
    return this._title
  }

  public set title (value: string) {
    this._title = 'The best game is ' + value
  }

  public get genre (): string | undefined {
    return this._genre
  }

  public set genre (value: string) {
    this._genre = value
  }

  public get platform (): string | undefined {
    return this._platform
  }

  public set platform (value: string) {
    this._platform = value
  }

  public get isMultiplayer (): boolean | undefined {
    return this._isMultiplayer
  }

  public set isMultiplayer (value: boolean) {
    this._isMultiplayer = value
  }

  play (): void {
    console.log(`Playing ${this._title}`)
  }
}

class VideoGameMarketingInformation {
  private _title: string | undefined
  private _genre: string | undefined
  private _platform: string | undefined
  private _isMultiplayer: boolean | undefined

  public get title (): string | undefined {
    return this._title
  }

  public set title (value: string) {
    this._title = value
  }

  public get genre (): string | undefined {
    return this._genre
  }

  public set genre (value: string) {
    this._genre = value
  }

  public get platform (): string | undefined {
    return this._platform
  }

  public set platform (value: string) {
    this._platform = value
  }

  public get isMultiplayer (): boolean | undefined {
    return this._isMultiplayer
  }

  public set isMultiplayer (value: boolean) {
    this._isMultiplayer = value
  }

  showInformation (): void {
    console.log(this._title + ' ' + ' in ' + this._genre)
  }
}

interface Builder {
  setTitle: (title: string) => void
  setGenre: (genre: string) => void
  setPlatform: (platform: string) => void
  setIsMultiplayer: (isMultiplayer: boolean) => void
  reset: () => void
  getProduct: () => VideoGame | VideoGameMarketingInformation
}

class VideoGameBuilder implements Builder {
  private _videoGame: VideoGame = new VideoGame()

  setTitle (title: string): void {
    this._videoGame.title = title
  }

  setGenre (genre: string): void {
    this._videoGame.genre = genre
  }

  setPlatform (platform: string): void {
    this._videoGame.platform = platform
  }

  setIsMultiplayer (isMultiplayer: boolean): void {
    this._videoGame.isMultiplayer = isMultiplayer
  }

  reset (): void {
    this._videoGame = new VideoGame()
  }

  getProduct (): VideoGame {
    return this._videoGame
  }
}

class VideoGameMarketingInformationBuilder implements Builder {
  private _videoGameMarketingInformation: VideoGameMarketingInformation = new VideoGameMarketingInformation()

  setTitle (title: string): void {
    this._videoGameMarketingInformation.title = title
  }

  setGenre (genre: string): void {
    this._videoGameMarketingInformation.genre = genre
  }

  setPlatform (platform: string): void {
    this._videoGameMarketingInformation.platform = platform
  }

  setIsMultiplayer (isMultiplayer: boolean): void {
    this._videoGameMarketingInformation.isMultiplayer = isMultiplayer
  }

  reset (): void {
    this._videoGameMarketingInformation = new VideoGameMarketingInformation()
  }

  getProduct (): VideoGameMarketingInformation {
    return this._videoGameMarketingInformation
  }
}

class Director {
  private _builder!: Builder

  setBuilder (builder: Builder): void {
    this._builder = builder
  }

  createPlaystationGame (title: string, genre: string, isMultiplayer: boolean) {
    this._builder.setTitle(title)
    this._builder.setGenre(genre)
    this._builder.setIsMultiplayer(isMultiplayer)
    this._builder.setPlatform('Playstation')
    return this._builder.getProduct()
  }

  createPlaystationGameMarketingInformation (title: string, genre: string, isMultiplayer: boolean) {
    this._builder.setTitle(title)
    this._builder.setGenre(genre)
    this._builder.setIsMultiplayer(isMultiplayer)
    this._builder.setPlatform('Playstation')
    return this._builder.getProduct()
  }

  createPCGame (title: string, genre: string, isMultiplayer: boolean) {
    this._builder.setTitle(title)
    this._builder.setGenre(genre)
    this._builder.setIsMultiplayer(isMultiplayer)
    this._builder.setPlatform('PC')
    return this._builder.getProduct()
  }
}

class Client {
  private readonly _director: Director

  constructor (director: Director) {
    this._director = director
  }

  playPlaystationGame (title: string, genre: string, isMultiplayer: boolean) {
    this._director.setBuilder(new VideoGameBuilder())
    const game = this._director.createPlaystationGame(title, genre, isMultiplayer)
    this._isGame(game)
    game.play()
  }

  playPCGame (title: string, genre: string, isMultiplayer: boolean) {
    this._director.setBuilder(new VideoGameBuilder())
    const game = this._director.createPCGame(title, genre, isMultiplayer)
    this._isGame(game)
    game.play()
  }

  advertiseGame (title: string, genre: string, isMultiplayer: boolean) {
    this._director.setBuilder(new VideoGameMarketingInformationBuilder())
    const advertisment = this._director.createPlaystationGame(title, genre, isMultiplayer)
    this._isMarketingInformation(advertisment)
    advertisment.showInformation()
  }

  _isGame (value: unknown): asserts value is VideoGame {
    if (!(value instanceof VideoGame)) {
      throw new Error('It\'s not a video!')
    }
  }

  _isMarketingInformation (value: unknown): asserts value is VideoGameMarketingInformation {
    if (!(value instanceof VideoGameMarketingInformation)) {
      throw new Error('It\'s not a video!')
    }
  }
}

const director = new Director()
const client = new Client(director)
client.playPCGame('Game !', 'RPG', false)
