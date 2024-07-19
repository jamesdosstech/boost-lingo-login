import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router)
  if(userService.getLoginStatus()) {
    console.log('auth is true')
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
}
