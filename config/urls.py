from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static

def home(request):
    return HttpResponse("<h1>Portfolio Website Working 🚀</h1>")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)