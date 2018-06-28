import { Component, OnInit } from '@angular/core';

import { Brush } from "./brush";
import { BrushService } from "../brush.service";


@Component({
  selector: 'app-brush-sort',
  templateUrl: './brush-sort.component.html',
  styleUrls: ['./brush-sort.component.css']
})
export class BrushSortComponent implements OnInit {

  brushes:Brush[] = [];
  material:String;
  brush:Brush;

  constructor(
    private brushService:BrushService
  ) { }

  ngOnInit() {
    this.brushService.getBrushes().subscribe(data => this.brushes = data);
  }

  onSearch(){
    console.log(this.material);
    this.brushService.getBrushes(this.material).subscribe(data => this.brushes = data);

  }

}
