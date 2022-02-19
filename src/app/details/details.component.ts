import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input('row') users;
  //users:any;
  constructor(private empService: ListService) { }

  ngOnInit(): void {
    //this.getEmployee();
  }
  getEmployee(){
    this.empService.getUser().subscribe((res:any)=>{
      this.users = res;
      console.log(this.users)
    })
  }
}
