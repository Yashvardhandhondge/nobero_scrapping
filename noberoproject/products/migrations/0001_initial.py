

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SKU',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=100)),
                ('size', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=255)),
                ('url', models.URLField(max_length=500)),
                ('title', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('product_urls', models.JSONField()),
                ('mrp', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('last_7_day_sale', models.IntegerField(blank=True, null=True)),
                ('fit', models.CharField(blank=True, max_length=255, null=True)),
                ('fabric', models.CharField(blank=True, max_length=255, null=True)),
                ('neck', models.CharField(blank=True, max_length=255, null=True)),
                ('sleeve', models.CharField(blank=True, max_length=255, null=True)),
                ('pattern', models.CharField(blank=True, max_length=255, null=True)),
                ('length', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('available_skus', models.ManyToManyField(related_name='products', to='products.sku')),
            ],
        ),
    ]
