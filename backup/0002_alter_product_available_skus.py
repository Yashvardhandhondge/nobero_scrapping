# Generated by Django 5.1 on 2024-08-21 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='available_skus',
            field=models.ManyToManyField(related_name='products', to='products.sku'),
        ),
    ]
