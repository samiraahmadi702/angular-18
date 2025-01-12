import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PhotosService {

  private baseUrl = 'https://picsum.photos';

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/v2/list?page=1&limit=10`)
      .pipe(
        map(data => {
          return data.map((photo: any) => (
            {id: photo.id, url: `${this.baseUrl}/id/${photo.id}/300/300`}))
        })
      )
  }
}
