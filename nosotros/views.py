from django.shortcuts import render, redirect
from .models import Contacto
from .forms import ContactoForm

def quienes_somos(request):
    return render(request, 'quienes_somos.html')

def contactenos(request):
    if request.method == "POST":
        nombre = request.POST.get('nombre')
        email = request.POST.get('email')
        mensaje = request.POST.get('mensaje')

        if nombre and email and mensaje:
            Contacto.objects.create(nombre=nombre, email=email, mensaje=mensaje)
            return redirect('contacto_exitoso')  # Redirige a una página de éxito
    return render(request, 'quienes_somos.html')


def contacto_exitoso(request):
    return render(request, 'nosotros/contacto_exitoso.html')  # Crea esta plantilla

def publicacion_detalle(request, id):
    return render(request, f'nosotros/publicacion{id}.html')
