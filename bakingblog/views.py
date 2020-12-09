from django.shortcuts import render
from django.http import HttpResponse
import os

def bakingblog(request):
	return render(request,  'TopRecipe.html')
def aboutme(request):
	return render(request, 'AboutMe.html')
def bread(request):
	return render(request, 'Bread.html')
def cake(request):
	return render(request, 'Cake.html')
def dessert(request):
	return render(request, 'Dessert.html')
def meal(request):
	return render(request, 'Meal.html')
def recent(request):
	return render(request, 'MostRecent.html')
