import json
from products.models import Product, SKU
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Load product data from a JSON file into the database'

    def handle(self, *args, **kwargs):
        # Define the path to the JSON file
        file_path = 'C:/Users/yashv/OneDrive/Desktop/Projects/pythonproject/nobero_scraper/outputnew2.json'
        
        # Open and read the JSON file
        with open(file_path, 'r', encoding='latin-1') as f:
            data = json.load(f)
            
            # Iterate over the data and update or create products
            for item in data:
                product, created = Product.objects.update_or_create(
                    url=item['url'],  # Ensure 'url' is unique or primary key
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
                        # 'available_skus': json.dumps(item.get('available_skus', [])),  # Convert list to JSON string
                        'product_urls': item.get('product_urls', []),  # Convert list to JSON string
                    }
                )
                available_skus_data = item.get('available_skus', [])
                skus = []
                for sku_data in available_skus_data:
                    # Create or get SKU instance
                    sku, _ = SKU.objects.get_or_create(
                        color=sku_data['color'],
                        size=','.join(sku_data['size'])  # Join sizes into a single string
                    )
                    skus.append(sku)
                
                # Set the SKUs for the product
                product.available_skus.set(skus)
                
                # Output messages
                if created:
                    self.stdout.write(self.style.SUCCESS(f"Product '{product.title}' created."))
                else:
                    self.stdout.write(self.style.SUCCESS(f"Product '{product.title}' updated."))

