
# This Scrapy spider crawls the Nobero website's Men's section, extracting detailed product data.
# It starts by gathering category URLs, then navigates through each category to retrieve product links.
# For each product, it extracts various details including price, images, MRP, last 7-day sales, available SKUs, and other attributes.


import scrapy
from urllib.parse import urljoin

class MenSpider(scrapy.Spider):
    name = "nobero"
    allowed_domains = ["nobero.com"]
    start_urls = [
        "https://nobero.com/pages/men"
    ]
    
    def parse(self, response):
        
        category_urls = response.css("#image-container[href*='/collections/']::attr(href)").getall()
    
        
        for category_url in category_urls:
            absolute_url = urljoin(response.url, category_url)
            yield scrapy.Request(url=absolute_url, callback=self.parse_category)
     
    def parse_category(self, response):
        
        product_urls = response.css("a[href*='/products/']::attr(href)").getall()
        for product_url in product_urls:
            absolute_url = urljoin(response.url, product_url)
            yield scrapy.Request(url=absolute_url, callback=self.parse_product)

        
        next_page = response.css("a.next::attr(href)").get()
        if next_page:
            absolute_next_page = urljoin(response.url, next_page)
            yield scrapy.Request(url=absolute_next_page, callback=self.parse_category)
    
    def parse_product(self, response):
        
        product = {
            "category": self.get_category(response),
            "url": response.url,
            "title": response.css("h1::text").get().strip(),
            "price": self.extract_price(response),
            "product_urls": self.extract_product_images(response),
            "MRP": self.extract_mrp(response),
            "last_7_day_sale": self.extract_last_7_day_sale(response),
            "available_skus": self.extract_skus(response),
            "fit": self.extract_fit(response),
            "fabric": self.extract_fabric(response),
            "neck": self.extract_neck(response),
            "sleeve": self.extract_sleeve(response),
            "pattern": self.extract_pattern(response),
            "length": self.extract_length(response),
            "description": self.extract_description(response),
        }
        yield product

    def get_category(self, response):
        breadcrumb_links = response.css('nav.breadcrumb a::text').getall()
        if len(breadcrumb_links) > 1:
            return breadcrumb_links[-1].strip()
        return "Unknown"

    def extract_price(self, response):
        price_str = response.css("h2 > spanclass::text").get()
        return self.parse_price(price_str)

    def extract_mrp(self, response):
        mrp_str = response.css("span#variant-compare-at-price > spanclass::text").get()
        return self.parse_price(mrp_str)

    def extract_last_7_day_sale(self, response):
      sale_text = response.css(".product_bought_count span::text").get()
    
      if sale_text:
        
        digits = ''.join([char for char in sale_text if char.isdigit()])
        
        
        if digits:
            return int(digits)
    
      return None

    
    def extract_skus(self, response):
        skus = []

        
        color_elements = response.css('label.color-select')
        colors = [color.css('input.color-select-input::attr(value)').get() for color in color_elements]

        
        size_elements = response.css('label.size-select::text').getall()
        sizes = [size.strip() for size in size_elements if size.strip()]

        
        for color in colors:
            skus.append({"color": color, "size": sizes})

        return skus

    def extract_fit(self, response):
        return response.css(".product-metafields-values:contains('Fit') p::text").get()

    def extract_fabric(self, response):
        return response.css(".product-metafields-values:contains('Fabric') p::text").get()

    def extract_neck(self, response):
        return response.css(".product-metafields-values:contains('Neck') p::text").get()

    def extract_sleeve(self, response):
        return response.css(".product-metafields-values:contains('Sleeve') p::text").get()

    def extract_pattern(self, response):
        return response.css(".product-metafields-values:contains('Pattern') p::text").get()

    def extract_length(self, response):
        return response.css(".product-metafields-values:contains('Length') p::text").get()

    def extract_description(self, response):
        description_html = response.css('#description_content').get()
        description = response.css('#description_content').xpath('string()').get()
        description = ' '.join(description.split())
        description = description.replace('\n', ' ').replace('• ', '\n• ')
        description = description.replace('\n ', '\n').replace('  ', ' ')
        formatted_description = description + '\n\n'
        return formatted_description

    def extract_product_images(self, response):
    
        srcset = response.css("img[srcset*='/cdn/shop/files/']::attr(srcset)").get()
    
        if srcset:
        
            urls = [url.strip().split(' ')[0] for url in srcset.split(',')]
        
        
            base_url = "https://nobero.com"
            urls = [url if url.startswith('http') else urljoin(base_url, url) for url in urls]
        else:
        
            urls = response.css("img[src*='/cdn/shop/files/']::attr(src)").getall()
            urls = list(set(urls))  # Remove duplicates
            base_url = "https://nobero.com"
            urls = [url if url.startswith('http') else urljoin(base_url, url) for url in urls]
    
        return urls

    
    

    def parse_price(self, price_str):
        if price_str:
            try:
                return float(price_str.replace('₹', '').replace(',', '').strip())
            except ValueError:
                return None
        return None
