import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from "../album";


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})

export class AlbumDetailComponent {
  albumId: number = 0;
  album: Album = { userId: 0, id: 0, title: '' };
  editedTitle: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.albumsService.getAlbumById(this.albumId)
        .subscribe(album => {
          this.album = album;
        });
    });
  }

  updateAlbumTitle(albumId: number): void {
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    this.album = updatedAlbum;
  }

  // updateAlbumTitle(albumId: number): void {
  //   const updatedAlbum = { ...this.album, title: this.editedTitle };
  //   this.albumsService.updateAlbumInList(updatedAlbum);
  // }

}