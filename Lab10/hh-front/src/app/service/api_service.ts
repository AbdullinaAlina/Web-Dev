import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Vacancy } from '../model/models';

const API_URL = 'http://127.0.0.1:8000/api';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    private companyUrl = `${API_URL}/companies`;
    private vacancyUrl = `${API_URL}/vacancies`;

    // Get all companies
    getAllCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.companyUrl);
    }

    // Get a single company by ID
    getCompanyById(id: number): Observable<Company> {
        return this.http.get<Company>(`${this.companyUrl}/${id}`);
    }

    // Get all vacancies for a single company by company ID
    getCompanyVacancies(id: number): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.companyUrl}/${id}/vacancies`);
    }

    // Get all vacancies
    getAllVacancies(): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(this.vacancyUrl);
    }

    // Get a single vacancy by ID
    getVacancyById(id: number): Observable<Vacancy> {
        return this.http.get<Vacancy>(`${this.vacancyUrl}/${id}`);
    }

    // Get the top 10 vacancies by salary
    getTopTenVacancies(): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.vacancyUrl}/top_ten`);
    }
}
