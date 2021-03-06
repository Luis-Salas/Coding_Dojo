# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-28 22:10
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quotes', '0005_auto_20160928_1708'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myquotes',
            name='quote',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.Quotes'),
        ),
        migrations.AlterField(
            model_name='myquotes',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.Users'),
        ),
        migrations.AlterField(
            model_name='quotes',
            name='made_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.Users'),
        ),
    ]
