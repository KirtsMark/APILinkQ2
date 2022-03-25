import { Component } from '@angular/core';
import { PostService } from './post.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  constructor(private post:PostService){}
  ngOnInit(){
    this.post.getPosts().subscribe((result)=>{
      console.warn("result",result)
      this.data=result
    })
  }
}
