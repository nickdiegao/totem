import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public senhasService: SenhasService) {}

  chamarSenha() {
    let senhaSE = this.senhasService.getSEIndex();
    let senhaSG = this.senhasService.getSGIndex();
    let senhaPP = this.senhasService.getPPIndex();
    
    if (senhaPP >= 0) {
        this.senhasService.atenderSenhaPP();
    } else if (senhaSE >= 0) {
        this.senhasService.atenderSenhaSE();
    } else if (senhaSG >= 0) {
        this.senhasService.atenderSenhaSG();
    }

    this.senhasService.atenderSenha();
  }

  reiniciarSistema() {
    let dataAtual: Date = new Date();
    let hours: number | string = dataAtual.getHours();
    let horasRestantes = 0
    if (hours > 17) {
      horasRestantes = hours - 17
    } else {
      horasRestantes = 17 - hours
    }
    hours = hours < 10 ? '0' + hours : hours;
  
    if (hours > "17") {
      this.senhasService.senhas = []
      this.senhasService.senhasGeral = 0;
      this.senhasService.senhasPrior = 0;
      this.senhasService.senhasExame = 0;
      this.senhasService.senhasTotal = 0;
      this.senhasService.count1 = 0;
      this.senhasService.count2 = 0;
      this.senhasService.count3 = 0;
      this.senhasService.senhaPPatendida = 0;
      this.senhasService.senhaSEatendida = 0;
      this.senhasService.senhaSGatendida = 0;
      this.senhasService.contadorDeSenhasAtendidas = 0;
      this.senhasService.senhasAtendidasENaoAtendidas = [];
    } else {
      if (horasRestantes == 1) {
        alert(`Ainda não é 17h. Falta ${horasRestantes} hora`)
      } else {
        alert(`Ainda não é 17h. Faltam ${horasRestantes} horas`)
      }
    }
  }

  cancelarSenha() {
    this.senhasService.senhasNaoChamadas()
  }
}
