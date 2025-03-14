from django.urls import path
from .views import quienes_somos
from . import views 
from .views import contactenos

urlpatterns = [
    path('', quienes_somos, name='quienes_somos'),
     path('publicacion<int:id>/', views.publicacion_detalle, name='publicacion_detalle'),
     path('contactenos/', contactenos, name='contactenos'),
]

