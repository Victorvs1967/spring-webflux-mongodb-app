import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
    if (token) {
      request = request.clone({
        setHeaders: {
          'authorization': 'Bearer '.concat(token),
        },
      });
    }
    return next.handle(request);
  }
}