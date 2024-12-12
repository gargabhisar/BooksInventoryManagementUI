import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Inject the APIService
  const apiService = inject(ApiService);

  // Get the token from sessionStorage
  const authToken = apiService.getToken();

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: authToken ? `Bearer ${authToken}` : '', // Add your token or custom header
    },
  });

  return next(clonedRequest);
};
