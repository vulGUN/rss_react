import { IPersonData } from '@services/types';

export default class CardsService {
  private readonly API_URL = 'https://swapi.dev/api/';

  private readonly API_PEOPLE_ENDPOINT = 'people';

  public async getCards(value: string, pageNumber = 1): Promise<IPersonData> {
    const url: string = `${this.API_URL}${this.API_PEOPLE_ENDPOINT}/?search=${value}&page=${pageNumber}`;
    const response: Response = await fetch(url);
    const data: IPersonData = await response.json();

    return data;
  }
}
