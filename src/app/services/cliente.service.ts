import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { environment }  from 'src/environments/environment';
import { Cliente }      from '../model/cliente';
import { Observable }   from 'rxjs';

const URL = environment.baseUrl + "/clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(URL);
  }

  getByCode(codigo:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(URL + "/" + codigo);
  }

  create(cliente:Cliente):Observable<any> {
    return this.httpClient.post<any>(URL, cliente);
  }

  delete(codigo:number):Observable<any> {
    return this.httpClient.delete(URL + "/" + codigo);
  }

}
