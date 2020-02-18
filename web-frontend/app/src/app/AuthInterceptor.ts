import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import "rxjs/add/operator/do";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem("token");

    if (accessToken) {
      req = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${accessToken}`)
      });
    }

    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }

    if (!req.headers.has("Accept")) {
      req = req.clone({
        headers: req.headers.set("Accept", "application/json")
      });
    }

    if (!req.headers.has("Access-Control-Allow-Headers")) {
      req = req.clone({
        headers: req.headers.set("Access-Control-Allow-Headers", "Content-Type")
      });
    }

    if (!req.headers.has("Access-Control-Allow-Origin")) {
      req = req.clone({
        headers: req.headers.set("Access-Control-Allow-Origin", "*")
      });
    }

    return next.handle(req).do(
      (event: HttpEvent<any>) => {},
      (err: any) => {
        // this.router.navigate(["/"]);
      }
    );
  }
}
