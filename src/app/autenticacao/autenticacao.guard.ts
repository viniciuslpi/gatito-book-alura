import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad {

  constructor(private usuarioService: UsuarioService, private router: Router){

  }

  canLoad(route: Route, segments: UrlSegment[]):
  Observable<boolean>| UrlTree | Promise<boolean| UrlTree> | boolean {

    if(!this.usuarioService.estaLogado()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
