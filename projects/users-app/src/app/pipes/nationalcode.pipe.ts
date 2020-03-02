import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : "nationalcode"
})
export class NationaCodePipe implements PipeTransform{

  transform(value : string, code : string){
    switch (code) {
      case "US": return "+1 " + value;
      case "AUS": return "+6 " + value;
      case "EUR": return "+3 " + value;
      default: return "+91 " + value
    }
  }

}
