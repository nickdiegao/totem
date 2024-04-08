import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  constructor() {}
  
  public DataAtual: Date = new Date();

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public count1: number = 0;
  public count2: number = 0;
  public count3: number = 0;

  somaGeral() {this.senhasGeral++; this.senhasTotal++; this.count3++}
  somaPrior() {this.senhasPrior++; this.senhasTotal++; this.count2++}
  somaExame() {this.senhasExame++; this.senhasTotal++; this.count1++}

  public senhas: any[] = [];

  getFormattedDate(): string {
    let currentDate: Date = new Date();
    let day: number | string = currentDate.getDate();
    let month: number | string = currentDate.getMonth() + 1;
    let year: number | string = currentDate.getFullYear() % 100;

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;

    return `${day}/${month}/${year}`;
  }

  gerarMinutosNovos(): string {
    let dataAtual = new Date();

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  gerarNumeroAleatorioPP(): number {
    const min = 1;
    const max = 5;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  gerarMinutosNovosPP(): string {
    let dataAtual = new Date();

    let minutosAtuais = dataAtual.getMinutes();
    let numeroAleatorio = this.gerarNumeroAleatorioPP();
    let minutosAtualizados = minutosAtuais + numeroAleatorio;
    dataAtual.setMinutes(minutosAtualizados);

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  gerarNumeroAleatorioSE(): number {
    const min = 0;
    const max = 1;
    return Math.random() * (max - min) + min;
  }

  gerarMinutosNovosSE(): string {
    let dataAtual = new Date();

    let minutosAtuais = dataAtual.getMinutes();
    let numeroAleatorio = this.gerarNumeroAleatorioSE();
    let minutosAtualizados = minutosAtuais + numeroAleatorio;
    dataAtual.setMinutes(minutosAtualizados);

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  gerarNumeroAleatorioSG() {
    const min = 1;
    const max = 15;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  gerarMinutosNovosSG(): string {
    let dataAtual = new Date();

    let minutosAtuais = dataAtual.getMinutes();
    let numeroAleatorio = this.gerarNumeroAleatorioSG();
    let minutosAtualizados = minutosAtuais + numeroAleatorio;
    dataAtual.setMinutes(minutosAtualizados);

    let day: number | string = dataAtual.getDate();
    let month: number | string = dataAtual.getMonth() + 1;
    let year: number | string = dataAtual.getFullYear();
    let hours: number | string = dataAtual.getHours();
    let minutes: number | string = dataAtual.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    year = year < 10 ? '0' + year : year;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  getSGIndex(): number {
    return this.senhas.findIndex(senha => senha.senha.includes('SG'));
  }
  
  senhaSE() {
    let newSenha = {
        color: 'warning',
        icon: 'newspaper',
        senha: `${this.getFormattedDate()}-SE${this.count1}`, 
        timestamp: `${this.gerarMinutosNovosSE()}`, 
    };

    let sgIndex = this.getSGIndex();

    if (sgIndex !== -1) {
        this.senhas.splice(sgIndex, 0, newSenha);
    } else {
        this.senhas.push(newSenha);
    }
  }

  getSEIndex(): number {
    return this.senhas.findIndex(senha => senha.senha.includes('SE'));
  }

  senhaSP() {
    let newSenha = {
      color: 'primary',
      icon: 'accessibility',
      senha: `${this.getFormattedDate()}-PP${this.count2}`, 
      timestamp: `${this.gerarMinutosNovosPP()}`, 
    };

    let seIndex = this.getSEIndex();
    let sgIndex = this.getSGIndex();

    if (seIndex !== -1) {
      this.senhas.splice(seIndex, 0, newSenha);
    } else if (sgIndex !== -1) {
      this.senhas.splice(sgIndex, 0, newSenha);
    } else {
      this.senhas.push(newSenha);
    }
    
  }

  senhaSG() {
    let newSenha = {
      color: 'success',
      icon: 'eyedrop',
      senha: `${this.getFormattedDate()}-SG${this.count3}`,
      timestamp: `${this.gerarMinutosNovosSG()}`, 
    };

    this.senhas.push(newSenha);
  }

}
