import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
  let isLogedin=sessionStorage.getItem("isLogedin");
  if(isLogedin=='false'){
    alert("Please loged-In.");
    _router.navigate(['login'])
    return false;
  }
  return true;
};
