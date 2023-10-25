import { IPeopleResponse } from '@services/types';

export default class CardsService {
  private readonly API_URL = 'https://swapi.dev/api/';

  private readonly API_ENDPOINT_PEOPLE = 'people';

  public async getCards(value: string): Promise<IPeopleResponse> {
    const URL = `${this.API_URL}${this.API_ENDPOINT_PEOPLE}/?search=${value}`;
    const RESPONSE = await fetch(URL);
    const DATA = await RESPONSE.json();

    return DATA;
  }
}
