import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environment'
import { Despesa } from '../models/Despesa';


@Injectable({
    providedIn: 'root'
})

export class DespesaService {

    constructor(private httpClient: HttpClient) {

    }

    private readonly baseURL = environment["endPoint"];

    AdicionarDespesa(despesa: Despesa) {
        return this.httpClient.post<Despesa>(`${this.baseURL}/AdicionarDespesa`, despesa)
    }

    ListarDespesasUsuario(emailUsuario: string) {
        return this.httpClient.get(`${this.baseURL}/ListarDespesasUsuario?emailUsuario=${emailUsuario}`);
    }

    AtualizarDespesa(despesa: Despesa) {
        return this.httpClient.put<Despesa>(`${this.baseURL}/AtualizarDespesa`, despesa)
    }

    ObterDespesa(id: number) {
        return this.httpClient.get(`${this.baseURL}/ObterDespesa?id=${id}`);
    }

    CarregaGraficos(emailUsuario: string) {
        return this.httpClient.get(`${this.baseURL}/CarregaGraficos?emailUsuario=${emailUsuario}`)
    }
}