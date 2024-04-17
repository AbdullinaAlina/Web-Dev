from django.shortcuts import render
from django.http import JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.views import View

# Function-based views 

def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def get_company(request, id):
    try:
        company = Company.objects.values().get(id=id)
        return JsonResponse(company)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def vacancies_by_company(request, id):
    try:
        vacancies = Vacancy.objects.filter(company_id=id)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.values().get(id=id)
        return JsonResponse(vacancy)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)

def top_vacancy_list(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

# Class-based views

class CompanyListView(View):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

class GetCompany(View):
    def get(self, request, id):
        try:
            company = Company.objects.values().get(id=id)
            return JsonResponse(company)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)

class VacanciesByCompanyView(View):
    def get(self, request, id):
        try:
            vacancies = Vacancy.objects.filter(company_id=id)
            serializer = VacancySerializer(vacancies, many=True)
            return JsonResponse(serializer.data, safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)})

class VacancyListView(View):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

class VacancyDetailView(View):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.values().get(id=id)
            return JsonResponse(vacancy)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)

class TopVacancyListView(View):
    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
