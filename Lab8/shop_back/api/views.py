from django.http import JsonResponse
from .models import Product, Category

def list_all_products(request):
    products = Product.objects.all().values()
    return JsonResponse(list(products), safe=False)

def get_product(request, id):
    try:
        product = Product.objects.values().get(id=id)
        return JsonResponse(product)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def list_all_categories(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories), safe=False)

def get_category(request, id):
    try:
        category = Category.objects.values().get(id=id)
        return JsonResponse(category)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def list_products_by_category(request, id):
    try:
        products = Product.objects.filter(category_id=id).values()
        return JsonResponse(list(products), safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
