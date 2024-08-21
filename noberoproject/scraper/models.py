# scraper/models.py
from django.db import models

class SKU(models.Model):
    color = models.CharField(max_length=100)
    size = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.color} - {self.size}"


class Product(models.Model):
    category = models.CharField(max_length=255)
    url = models.URLField(max_length=500)
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    product_urls = models.JSONField()
    mrp = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    last_7_day_sale = models.IntegerField(null=True, blank=True)
    available_skus = models.ManyToManyField(SKU, related_name='products')
    fit = models.CharField(max_length=255, null=True, blank=True)
    fabric = models.CharField(max_length=255, null=True, blank=True)
    neck = models.CharField(max_length=255, null=True, blank=True)
    sleeve = models.CharField(max_length=255, null=True, blank=True)
    pattern = models.CharField(max_length=255, null=True, blank=True)
    length = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
