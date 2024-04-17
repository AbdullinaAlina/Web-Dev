from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="")
    city = models.CharField(max_length=100)
    address = models.TextField(default="")

    def __str__(self):
        return self.name
    
class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    Company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    