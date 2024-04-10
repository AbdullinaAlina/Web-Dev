from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100, default="")
    description = models.TextField(default="")
    city = models.CharField(max_length=100, default="")
    address = models.TextField(default="")

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "company"
        verbose_name_plural = "companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=100, default="")
    description = models.TextField(default="")
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
    