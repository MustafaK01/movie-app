import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

export class ErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errMessage = "Hata ! ";

                if(error.error.error){
                    if(error.status==401){
                        errMessage="Yetkiniz Yok Lütfen Giriş Yapın"
                        console.log(errMessage)
                        return throwError(errMessage);
                    }  
                }
                if(error.error.error){
                    switch(error.error.error.message){
                      case "EMAIL_NOT_FOUND":
                        errMessage = "Kayıtlı E-Mail Adresi Bulunamadı";
                            break;
                        case "INVALID_PASSWORD":
                            errMessage="Parola Hatalı";
                            break;
                        case "EMAIL_EXISTS":
                            errMessage="E-Mail Adresi Zaten Kayıtlı";
                            break;
                    }
                    console.log(error)
                    return throwError(errMessage);
                  }
                return throwError(errMessage);

            })
        )
    }
}
