# Generated by Django 4.2.4 on 2023-08-04 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=100)),
                ('interests', models.TextField()),
                ('strengths', models.TextField()),
                ('Aspiration', models.TextField()),
                ('location', models.CharField(max_length=100)),
            ],
        ),
    ]