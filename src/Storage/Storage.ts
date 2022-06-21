import IStorage from "@/types/Storage";
export class Storage implements IStorage {
  getDataFromStorageByKey<T>(key: string): T[] {
    const stringVal: string | null = localStorage.getItem(key);
    let data: T[] = [];
    if (stringVal) {
      data = JSON.parse(stringVal);
    }
    return data;
  }
  addItemByKey<T>(key: string, item: T): void {
    const rawArr: T[] = this.getDataFromStorageByKey(key);
    let updatedArr: string;
    if (rawArr?.length > 0) {
      rawArr.push(item);
      updatedArr = JSON.stringify(rawArr);

      localStorage.setItem(key, updatedArr);
    } else {
      rawArr.push(item);
      updatedArr = JSON.stringify(rawArr);
      localStorage.setItem(key, updatedArr);
    }
  }
  removeItemByKey(key: string): void {
    localStorage.removeItem(key);
  }
  setDataByKey<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
