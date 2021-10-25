import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-subject',
  templateUrl: './row-subject.component.html',
  styleUrls: ['./row-subject.component.css']
})
export class RowSubjectComponent implements OnInit {

  @Input() subjects:any;

  constructor() { }

  ngOnInit(): void {

  }

}
