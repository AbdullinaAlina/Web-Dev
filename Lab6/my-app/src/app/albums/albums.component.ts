import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Observable } from "rxjs";
import { Album } from '../album';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbum: Album = {
    userId: 0,
    id: 0,
    title: "",
  };

  constructor(private albumsService: AlbumsService) { }
  editedTitle: string = "";

  ngOnInit(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => {
        this.albums = albums;
      });
  }

  addAlbum() {
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => { this.albums.push(album); });
    this.newAlbum = {} as Album;
  }


  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe();
    this.albums = this.albums.filter(album => album.id !== id);
  }

}
