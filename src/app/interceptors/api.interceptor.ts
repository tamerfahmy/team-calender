import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('api/')) {
      return next.handle(this.appendBaseUrl(req));
    }

    return next.handle(req);
  }

  private appendBaseUrl(req: HttpRequest<any>): HttpRequest<any> {
    const apiReq = req.clone({ url: `${environment.API_BASE_URL}${req.url}` });
    return apiReq;
  }
}
