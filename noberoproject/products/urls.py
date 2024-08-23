
# This code defines URL patterns for the Product API endpoints.
# - The `products/` endpoint maps to `ProductListCreateView`, allowing users to list all products or create a new product.
# - The `products/<int:pk>/` endpoint maps to `ProductDetailView`, allowing users to retrieve, update, or delete a specific product by its primary key (`pk`).
from django.urls import path
from .views import ProductListCreateView, ProductDetailView

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]
