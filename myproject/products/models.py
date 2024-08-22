from django.db import models

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    productDetails = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.CharField(max_length=255)
    status = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
