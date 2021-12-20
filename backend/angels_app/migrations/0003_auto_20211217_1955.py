# Generated by Django 3.1 on 2021-12-17 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('angels_app', '0002_auto_20211217_1954'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='name',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email address'),
        ),
    ]