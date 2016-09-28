# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-28 20:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyQuotes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Quotes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote_by', models.CharField(max_length=100)),
                ('message', models.CharField(max_length=1000)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('alias', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AddField(
            model_name='quotes',
            name='made_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.Users'),
        ),
        migrations.AddField(
            model_name='myquotes',
            name='quote',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.Quotes'),
        ),
        migrations.AddField(
            model_name='myquotes',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quotes.Users'),
        ),
    ]