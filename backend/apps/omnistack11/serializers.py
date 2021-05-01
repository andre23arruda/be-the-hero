from django.shortcuts import get_object_or_404
from rest_framework import serializers

from .models import Ong, Incident

class OngSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ong
        fields = '__all__'

    def validate(self, data):
        return data



class OngSessionSerializer(serializers.ModelSerializer):
    id = serializers.CharField(max_length=8)

    class Meta:
        model = Ong
        fields = ['id', 'name']




class IncidentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Incident
        exclude = ['ong']

    def validate(self, data):
        return data


class IncidentsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Incident
        fields = '__all__'
