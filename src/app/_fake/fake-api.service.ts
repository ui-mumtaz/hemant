import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { DataTable } from './data.table';

@Injectable({
  providedIn: 'root',
})
export class FakeAPIService implements InMemoryDbService {
  constructor() {}

  /**
   * Create Fake DB and API
   */
  createDb(): {} | Observable<{}> {
    const db = {
      // auth module
      users: DataTable.data,
      district: DataTable.district,
      village: DataTable.village,
      citizen: DataTable.citizen
    };
    return db;
  }
}
