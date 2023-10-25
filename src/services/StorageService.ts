export default class StorageService {
  private SEARCH_DATA = localStorage.getItem('searchData');

  public getSearchData() {
    return this.SEARCH_DATA;
  }

  public setSearchData(value: string) {
    localStorage.setItem('searchData', value);
    // this.SEARCH_DATA = value;
  }
}
