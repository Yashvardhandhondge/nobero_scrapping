
# This code defines serializers for converting `Product` and `SKU` model instances into JSON format and vice versa.
# - `SKUSerializer` handles serialization of the `SKU` model, including all fields.
# - `ProductSerializer` handles serialization of the `Product` model, including all fields, with `available_skus` being a nested list of SKUs serialized using `SKUSerializer`.
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
