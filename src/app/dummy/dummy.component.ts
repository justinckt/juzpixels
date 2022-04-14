import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  value='';
  constructor(private router:Router) { }

  onClickHeader()
  {
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
  }

}
