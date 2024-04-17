"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from .views import CompanyListView, GetCompany, VacanciesByCompanyView, VacancyListView, VacancyDetailView, TopVacancyListView


urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:id>/', GetCompany.as_view(), name='company_detail'),
    path('companies/<int:id>/vacancies/', VacanciesByCompanyView.as_view(), name='company_vacancies'),
    path('vacancies/', views.vacancy_list, name='vacancy_list'),
    path('vacancies/<int:id>/', views.get_vacancy, name='vacancy_detail'),
    path('vacancies/top_ten/', views.top_vacancy_list, name='top_ten_vacancies'),
]
