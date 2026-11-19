import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('auth guard activated');
  const router = inject(Router)
  if(localStorage.getItem('token'))
    return true;
  router.navigate(['/login']);
  return false;
};
