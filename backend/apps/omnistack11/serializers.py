from django.shortcuts import get_object_or_404
from rest_framework import serializers

from .models import Ong, Incident

class OngSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ong
        fields = '__all__'

    def validate(self, data):
        return data


class IncidentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Incident
        exclude = ['ong']

    ## verificando headers no serializer, mas o oficial está na view
    # def create(self, validated_data):
    #     request = self.context.get('request')
    #     incident = None
    #     if 'Authorization' in request.headers:
    #         id_for_login = request.headers['Authorization']
    #         ong = get_object_or_404(Ong, id_for_login=id_for_login)
    #         validated_data['ong'] = ong
    #         incident = Incident.objects.create(**validated_data)
    #         incident.save()
    #     return incident

    def validate(self, data):
        return data


class IncidentsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Incident
        fields = '__all__'
