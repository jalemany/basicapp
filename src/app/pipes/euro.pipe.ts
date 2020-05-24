import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let resultado = "";

    if (Number.isFinite(value)){
      resultado = value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }

    return resultado;
  }

}
