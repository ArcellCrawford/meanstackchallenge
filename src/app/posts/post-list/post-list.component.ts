import { Component, OnInit} from "@angular/core";
 
import { Post } from '../post.model';
import { PostService } from '../posts.service';
 
 
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
 
 
export class PostListComponent implements OnInit {
  posts: Post[] = [];
 
  constructor(public postService: PostService) {}
 
 
  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
}
