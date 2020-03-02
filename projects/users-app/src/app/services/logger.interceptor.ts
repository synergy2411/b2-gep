import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor{

  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{

    // if(req.method === "GET"){

    // }
    // const clonedReq = req.clone({
    //   params : new HttpParams().set("auth", "jwt_token")
    // })

    console.log("LOGGER INTERCEPTOR WORKS", req);

    // return next.handle(clonedReq);
    return next.handle(req)
      .pipe(tap(response => {
        console.log("TAPPING : ", response);
        return response;
      })).pipe(map((resp)=>{
        return resp;
      }))
  }

}
