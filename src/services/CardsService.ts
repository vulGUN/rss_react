import { IPersonData } from 'src/types';

export default class CardsService {
  private readonly API_URL = 'https://swapi.dev/api/';

  private readonly API_PEOPLE_ENDPOINT = 'people';

  public async getCards(value: string, pageNumber = 1): Promise<IPersonData> {
    const URL: string = `${this.API_URL}${this.API_PEOPLE_ENDPOINT}/?search=${value}&page=${pageNumber}`;
    const RESPONSE: Response = await fetch(URL);
    const DATA: IPersonData = await RESPONSE.json();

    return DATA;
  }
}
