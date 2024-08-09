import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefundService {
  private apiUrl = 'http://localhost:8080/api/refunds'; // Adjust this to your API URL

  constructor(private http: HttpClient) {}

  getRefundRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/requests`);
  }

  approveRefund(requestId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/approve/${requestId}`, {});
  }

  rejectRefund(requestId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/reject/${requestId}`, {});
  }
}
