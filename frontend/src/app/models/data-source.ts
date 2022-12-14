import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";

export class DataSources extends DataSource<any> {

  data: BehaviorSubject<any[]>;

  constructor(data: any[]) {
    super();
    this.data = new BehaviorSubject<any[]>(data);
  }

  connect(): Observable<any[]> {
    return this.data;
  }
  disconnect(): void {
    this.data = new BehaviorSubject<any[]>([]);
  }

}