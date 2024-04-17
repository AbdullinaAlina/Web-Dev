import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vacancy } from 'src/app/model/models';
import { ApiService } from 'src/app/service/api_service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
})
export class VacancyListComponent implements OnChanges {
  @Input()
  companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private service: ApiService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['companyId'] && changes['companyId'].currentValue) {
      this.service.getCompanyVacancies(changes['companyId'].currentValue).subscribe((vacancies) => {
        this.vacancies = vacancies;
      });
    }
  }
}
