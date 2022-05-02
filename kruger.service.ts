import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class KrugerService {
  API: string='http://localhost/empleados/';

  constructor(private clientHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",datosEmpleado);
  }
}
