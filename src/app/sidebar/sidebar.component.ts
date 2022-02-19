import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { ListService } from '../list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  district:any;
  state:any;
  city:any;
  districtId:number;
  pages;

  @Output() row = new EventEmitter<string>();
  constructor(private empService: ListService, private _api:AppService) { }

  ngOnInit(): void {
    this.getCountry();

  }

  getCountry(){
    this.empService.getDistrict().subscribe((res:any)=>{
      this.district = res;
      console.log(this.district)
    })
  }

  getDistrict(event){
    this.districtId = Number(event.target.value)
    this.empService.getVillage().subscribe((res:any)=>{
      let statex = res;
      this.state = statex.filter(x=> x.districtId == this.districtId)
      console.log(this.state)
    })
  }

  getCity(event){
    console.log(+event.target.value)
    this.empService.getCity().subscribe((res:any)=>{
      let city = res;
      this.city = city.filter(x=> x.state_id == +event.target.value)
      console.log(this.city)
    })
  }
  
  onTerm(term: string, id:number) {
    this._api.search(term, id).subscribe(page => {
      console.log(page);
      this.pages = page;
    });
  }

  onSelectRow(row) {
    this.row.emit(row);
  }
 

 
}
