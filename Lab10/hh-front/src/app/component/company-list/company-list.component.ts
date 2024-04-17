import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/models';
import { ApiService } from 'src/app/service/api_service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.service.getAllCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  selectCompany(company: Company) {
    this.selectedCompany = company;
  }
}
