import { Item } from './../model/item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
  aData: Item[] = [
    new Item('test', 'desc test'),
    new Item('test', 'desc test'),
  ];

}
