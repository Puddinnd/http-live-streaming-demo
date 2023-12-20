import { writable } from 'svelte/store'

export class HeaderInfo {
  index: number;
  checked: boolean;
  name: string;
  value: string;

  constructor(index: number, name:string, value:string) {
    this.index = index
    this.checked = true
    this.name = name
    this.value = value
  }
}

export const headerList = writable([])
export const getNewHeader = (index:number, name:string, value:string) => {
  return new HeaderInfo(index,name,value)
}
