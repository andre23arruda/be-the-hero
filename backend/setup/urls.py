from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static # para servir midia
from rest_framework import routers
from omnistack11.views import OngsViewSet, IncidentsViewSet, OngIncidentsList, OngLogin

# router
router = routers.DefaultRouter()
router.register('omnistack11/ongs', OngsViewSet, basename='Ongs')
router.register('omnistack11/incidents', IncidentsViewSet, basename='Incidents')
router.register('omnistack11/profile', OngIncidentsList, basename='ProfileIncidents')
router.register('omnistack11/sessions', OngLogin, basename='Login')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # servindo mídia

# para servir estáticos quando rodar manage.py runserver_ip
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()