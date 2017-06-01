from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def login(request):
    context = {}
    return render(request, 'fitify/login.html', context)
