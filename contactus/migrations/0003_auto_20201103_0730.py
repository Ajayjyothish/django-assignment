# Generated by Django 3.1.3 on 2020-11-03 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactus', '0002_auto_20201103_0728'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='phone',
            field=models.IntegerField(null=True),
        ),
    ]
