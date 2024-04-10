from rest_framework import serializers
from hh_back.models import Company, Vacancy
from rest_framework.serializers import ModelSerializer

class CompanySerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = (
            'id', 'name', 'description', 'city', 'address'
        )

class VacancySerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')