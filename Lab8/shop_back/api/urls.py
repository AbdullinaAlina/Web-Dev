from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.list_all_products, name='product-list'),
    path('products/<int:id>/', views.get_product, name='get-product'),
    path('categories/', views.list_all_categories, name='category-list'),
    path('categories/<int:id>/', views.get_category, name='get-category'),
    path('categories/<int:id>/products/', views.list_products_by_category, name='category-products-list'),
]
