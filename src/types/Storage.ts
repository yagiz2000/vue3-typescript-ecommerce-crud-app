export default interface IStorage {
  addItemByKey<T>(key: string, item: T): void;
  removeItemByKey(key: string): void;
  getDataFromStorageByKey<T>(key: string): T[];
  setDataByKey<T>(key: string, data: T): void;
}
