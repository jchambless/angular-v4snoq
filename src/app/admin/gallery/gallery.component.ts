import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements OnInit {
  name: string;
  description: string;

  constructor() {

  }

  ngOnInit() {
    this.name = "Admin Pictures";
    this.description = "This is a gallery full of admin pictures.";
  }

  imageClicked($event) {
    console.log("Image was clicked. This is output from parent component.");
  }
}