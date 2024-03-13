import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  constructor(private albumsService: AlbumsService) { }
  editedTitle: string = "";

  ngOnInit(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => {
        this.albums = albums;
      });
  }

  deleteAlbum(id: number): void {
    // Simulate deletion by filtering out the album with the given id
    this.albums = this.albums.filter(album => album.id !== id);
  }




}
