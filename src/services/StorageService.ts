export default class StorageService {
  private SEARCH_STORAGE = localStorage.getItem('searchStorage');

  public getSearchData() {
    return this.SEARCH_STORAGE;
  }

  public setSearchData(value: string) {
    localStorage.setItem('searchStorage', value);
  }
}
