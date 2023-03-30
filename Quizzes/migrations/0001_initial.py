# Generated by Django 3.2.5 on 2023-03-21 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quiz_name', models.CharField(max_length=255, verbose_name='Quiz name')),
                ('description', models.TextField(blank=True, null=True)),
                ('json_content', models.TextField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
            ],
        ),
    ]
