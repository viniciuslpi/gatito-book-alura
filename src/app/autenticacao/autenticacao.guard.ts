import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(!this.usuarioService.estaLogado()){
        this.router.navigate(['home']);
        console.log('teste')
        return false;
      }
      return true;
  }
}
