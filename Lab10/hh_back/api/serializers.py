from rest_framework import serializers
from hh_back.models import Company, Vacancy
from rest_framework.serializers import ModelSerializer

class CompanySerializer(serializers.Serializer):
    
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    class Meta:
        model = Company
        fields = (
            'id', 'name', 'description', 'city', 'address'
        )

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

class VacancySerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')