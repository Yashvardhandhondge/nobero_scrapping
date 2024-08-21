from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Product
from .serializers import ProductSerializer
import json
from django.conf import settings
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

class ProductPagination(PageNumberPagination):
    page_size = 10

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagination

    def perform_create(self, serializer):
        # Update image URLs before saving the product
        data = serializer.validated_data
        data['product_urls'] = self.update_image_urls(data.get('product_urls', []))
        serializer.save(**data)

    def update_image_urls(self, urls):
        base_url = getattr(settings, 'BASE_URL', 'https://nobero.com')
        return [url if url.startswith('http') else base_url + url for url in urls]

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {
        'price': ['lt', 'gt'],
        'available_skus__color': ['exact'],
        'category': ['exact'],
    }