import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

 itemName = '';

  constructor(private router: Router) { }

  onClickImages(val:any)
  {
    if(val=='photography')
    {
      console.log('Photography clicked')
      this.router.navigateByUrl('photography');
    }
    else if(val=='digital')
    {
      console.log('Photography clicked')
      this.router.navigateByUrl('digital');
    }
    else if(val=='pencil')
    {
      console.log('Photography clicked')
      this.router.navigateByUrl('pencil');
    }
    else
    {
      console.log('Nothing clicked')
    }
    
  }

  ngOnInit(): void {
  }

}
