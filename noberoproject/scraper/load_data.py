import json
from scraper.models import Product, SKU

def load_products(file_path):
    # Try different encodings if UTF-8 does not work
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
    except UnicodeDecodeError:
        with open(file_path, 'r', encoding='latin-1') as file:
            data = json.load(file)
    
    for item in data:
        category = item.get('category')
        url = item.get('url')
        title = item.get('title')
        price = item.get('price')
        mrp = item.get('MRP')
        last_7_day_sale = item.get('last_7_day_sale')
        available_skus = item.get('available_skus', [])
        fit = item.get('fit')
        fabric = item.get('fabric')
        neck = item.get('neck')
        sleeve = item.get('sleeve')
        pattern = item.get('pattern')
        length = item.get('length')
        description = item.get('description')
        
        # Create or get SKUs
        sku_objects = []
        for sku in available_skus:
            color = sku.get('color')
            size = sku.get('size')
            for s in size:
                sku_obj, created = SKU.objects.get_or_create(color=color, size=s)
                sku_objects.append(sku_obj)
        
        # Create Product
        Product.objects.create(
            category=category,
            url=url,
            title=title,
            price=price,
            mrp=mrp,
            last_7_day_sale=last_7_day_sale,
            fit=fit,
            fabric=fabric,
            neck=neck,
            sleeve=sleeve,
            pattern=pattern,
            length=length,
            description=description,
            product_urls=[url],
        ).available_skus.set(sku_objects)
