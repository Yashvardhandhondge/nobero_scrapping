
# This script loads product data from a JSON file into the database.
# - It defines a Django management command that reads the data from a JSON file located at 'outputnew2.json'.
# - For each product in the JSON data, it updates or creates a Product record in the database based on the product URL.
# - It also handles associated SKUs (Stock Keeping Units) by getting or creating SKU records and linking them to the corresponding Product.
# - The script provides feedback in the console, indicating whether each product was created or updated.


import json
from products.models import Product, SKU
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Load product data from a JSON file into the database'

    def handle(self, *args, **kwargs):

        file_path = 'C:/Users/yashv/OneDrive/Desktop/Projects/pythonproject/nobero_scraper/outputnew2.json'
        
        
        with open(file_path, 'r', encoding='latin-1') as f:
            data = json.load(f)
            
            
            for item in data:
                product, created = Product.objects.update_or_create(
                    url=item['url'],  
                    defaults={
                        'category': item.get('category', ''),
                        'title': item.get('title', ''),
                        'price': item.get('price', 0),
                        'mrp': item.get('MRP', 0),
                        'last_7_day_sale': item.get('last_7_day_sale', 0),
                        'fit': item.get('fit', ''),
                        'fabric': item.get('fabric', ''),
                        'neck': item.get('neck', ''),
                        'sleeve': item.get('sleeve', ''),
                        'pattern': item.get('pattern', ''),
                        'length': item.get('length', ''),
                        'description': item.get('description', ''),
                        
                        'product_urls': item.get('product_urls', []),  
                    }
                )
                available_skus_data = item.get('available_skus', [])
                skus = []
                for sku_data in available_skus_data:
                    
                    sku, _ = SKU.objects.get_or_create(
                        color=sku_data['color'],
                        size=','.join(sku_data['size'])  
                    )
                    skus.append(sku)
                
                
                product.available_skus.set(skus)
                
                
                if created:
                    self.stdout.write(self.style.SUCCESS(f"Product '{product.title}' created."))
                else:
                    self.stdout.write(self.style.SUCCESS(f"Product '{product.title}' updated."))

