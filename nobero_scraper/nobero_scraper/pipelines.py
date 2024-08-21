# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
# pipelines.py

class ImageUrlUpdatePipeline:
    def process_item(self, item, spider):
        base_url = "https://nobero.com"
        if 'product_urls' in item:
            # Fix URL prefix issue
            item['product_urls'] = [url.replace('//nobero.com/nobero.com', '') if url.startswith('//nobero.com/nobero.com') else url for url in item['product_urls']]
            item['product_urls'] = [url if url.startswith('http') else base_url + url for url in item['product_urls']]
        return item
