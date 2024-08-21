# scraper/serializers.py
from rest_framework import serializers
from .models import Product, SKU

class SKUSerializer(serializers.ModelSerializer):
    class Meta:
        model = SKU
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    available_skus = SKUSerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'
