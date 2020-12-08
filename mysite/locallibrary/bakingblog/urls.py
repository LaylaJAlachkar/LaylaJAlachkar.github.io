from django.urls import path
from . import views

urlpatterns = [
	path('admin/', views.bakingblog, name='Admin'),
	path('aboutme/',views.aboutme, name='AboutMe'), 
	path('bread/', views.bread, name='Bread'), 
	path('cake/', views.cake, name='Cake'),
	path('dessert/', views.dessert, name='Dessert'),
	path('meal/', views.meal, name='Meal'),
	path('recent/', views.bakingblog, name='Recent'),
	path('', views.bakingblog)
]