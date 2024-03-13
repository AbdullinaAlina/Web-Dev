import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Album } from './album';
import { Photo } from './photo';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albums: Album[] = [];
  private photos: Photo[] = [];


  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<Album[]>(this.albumsUrl);

  }

  getAlbumById(albumId: number): Observable<Album> {
    const url = `${this.albumsUrl}/${albumId}`;
    return this.http.get<Album>(url);
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.albumsUrl}/${id}/photos`)
  }





}
