import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const loginGuard : CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router)
  if(userService.getLoginStatus()) {
    router.navigate(['/home'])
    console.log('log in status true')
    return false
  } else {
    console.log('login status false')
    return true

  }
};
