import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from "@angular/router";

import { Album } from '../album';
import { Photo } from '../photo';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) { }
  photos: Photo[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumsService.getPhotos(id).subscribe((photos) => { this.photos = photos; });
    });
  }
}