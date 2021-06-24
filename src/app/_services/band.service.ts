import { Injectable } from '@angular/core';
import { Band } from '../_models';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ' })
};
@Injectable({
  providedIn: 'root'
})

export class BandService {
  constructor(private http: HttpClient) { }

  getAllBands() {
    return this.http.get<any[]>(`${environment.apiUrl}/posts`, httpOption)
  }

  getBandById(bandId: Number) {
    return this.http.get<any>(`${environment.apiUrl}/posts/${bandId}`, httpOption);
  }

  addBand(band: Band) {
    return this.http.post<Band>(`${environment.apiUrl}/posts`, band, httpOption).pipe(
      tap((band: Band) => console.log(`inserted band = ${JSON.stringify(band)}`)),
      catchError(error => error)
    );
  }

  updateBand(band: Band) {
    return this.http.put(`${environment.apiUrl}/posts/${band.id}`, band, httpOption).pipe(
      tap(updateBand => console.log(`updated band = ${JSON.stringify(band)}`)),
      catchError(error => error)
    );
  }

  deleteBand(bandId: Number) {
    return this.http.delete<Band>(`${environment.apiUrl}/posts/${bandId}`, httpOption).pipe(
      tap(_ => console.log(`Deleted band with Id = ${bandId}`)),
      catchError(error => of(null))
    );
  }
}