from django.shortcuts import get_object_or_404

from django_filters.rest_framework import DjangoFilterBackend # ferramenta para filtrar info na API
from rest_framework import viewsets, filters, generics, status, pagination
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import pagination

import ast

from .serializers import OngSerializer, IncidentSerializer, IncidentsListSerializer
from .models import Ong, Incident


class PaginationFive(pagination.PageNumberPagination):
    '''Número de elementos listados por página'''
    page_size = 5


class OngsViewSet(viewsets.ModelViewSet):
    '''Lista de ongs'''
    queryset = Ong.objects.all()
    serializer_class = OngSerializer
    pagination_class = None

    # Ferramentas de filtragem
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['name']
    search_fields = ['name',]
    filterset_fields = ['city',]


class IncidentsViewSet(viewsets.ModelViewSet):
    '''Registro de casos'''
    queryset = Incident.objects.all()
    serializer_class = IncidentSerializer
    pagination_class = PaginationFive

    # Ferramentas de filtragem
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['title']
    search_fields = ['title',]
    filterset_fields = ['ong',]

    def create(self, serializer):
        '''Cria Incident se houver Authorization no header da requisição'''
        if 'Authorization' in self.request.headers:
            id = self.request.headers['Authorization']
            ong = get_object_or_404(Ong, id=id)
            incident_data = serializer.data
            incident_data['ong'] = ong
            incident = Incident.objects.create(**incident_data)
            incident.save()
            created_incident = {**serializer.data, 'ong': ong.id}
            return Response(created_incident, status=status.HTTP_200_OK)
        return Response({'detail': 'Forbidden operation'}, status=status.HTTP_401_UNAUTHORIZED)

    def destroy(self, request, *args, **kwargs):
        '''Exclui Incident se houver Authorization no header da requisição'''
        id_incident = self.kwargs.pop('pk', None)
        if 'Authorization' in self.request.headers:
            id = self.request.headers['Authorization']
            incident = get_object_or_404(Incident, pk=id_incident, ong__id=id)
            incident.delete()
            return Response({'detail': 'Objeto deletado'}, status=status.HTTP_200_OK)
        return Response({'detail': 'Forbidden operation'}, status=status.HTTP_401_UNAUTHORIZED)

    def validate(self, data):
        return data


class OngIncidentsList(viewsets.ReadOnlyModelViewSet):
    '''Lista de casos da ONG'''

    def get_queryset(self):
        '''Retorna casos específicos da ong'''
        if 'Authorization' in self.request.headers:
            id = self.request.headers['Authorization']
            queryset = Incident.objects.filter(ong__id=id)
            return queryset

    serializer_class = IncidentsListSerializer
    pagination_class = None


class OngLogin(viewsets.ReadOnlyModelViewSet):
    '''Login da ONG'''
    queryset = Ong.objects.all()
    serializer_class = OngSerializer

    def create(self, serializer):
        '''Cria sessão de login'''
        request_body = self.request.body
        request_body = request_body.decode('UTF-8')
        request_body = ast.literal_eval(request_body) # transforma bytes em json
        id = request_body['id']
        ong = get_object_or_404(Ong, id=id)
        serializer = OngSerializer(ong)

        if ong:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'detail': 'No ONG found with this ID'}, status=status.HTTP_400_UNAUTHORIZED)

    serializer_class = OngSerializer
    pagination_class = None