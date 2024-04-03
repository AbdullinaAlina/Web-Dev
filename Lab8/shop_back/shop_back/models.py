from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.FloatField()
    rating = models.FloatField()
    is_liked = models.BooleanField(default=False)
    image = models.URLField()
    href = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.name
