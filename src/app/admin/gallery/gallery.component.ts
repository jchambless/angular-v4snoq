import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FxGalleryService } from '../../framework/components/gallery/gallery.service';

@Component({
  selector: 'admin-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements OnInit {
  name: string;
  description: string;

  constructor(
    private galleryService: FxGalleryService
  ) {

  }

  ngOnInit() {
    this.name = "Admin Pictures";
    this.description = "This is a gallery full of admin pictures.";
  }

  imageClicked($event) {
    console.log("Image was clicked. This is output from parent component.");
  }

  createCatalog($event) {
    this.galleryService.openCatalogDialog();
  }

  catalogCreated($event) {
    console.log("Create catalog clicked.");
  }

  uploadToCatalog($event) {
    this.galleryService.openUploadDialog();
  }

  imageUploaded($event) {
    console.log("Image upload clicked.");
  }
}