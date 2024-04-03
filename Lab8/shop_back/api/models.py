from django.db import models
import json

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
    def to_json(self):
        data = {
            'id': self.id,
            'name': self.name,
        }
        return json.dumps(data)
    
    class Meta:
        verbose_name_plural = "Categories"
    
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    def to_json(self):
        data = {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }
        return json.dumps(data)
