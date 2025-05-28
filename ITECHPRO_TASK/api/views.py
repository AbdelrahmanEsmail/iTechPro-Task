from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Destination, Booking
from .serializers import DestinationSerializer, BookingSerializer
from django.shortcuts import get_object_or_404

class DestinationListView(APIView):
    def get(self, request):
        destinations = Destination.objects.all()
        serializer = DestinationSerializer(destinations, many=True)
        return Response(serializer.data)
    
class DestinationDetailView(APIView):
    def get(self, request, pk):
        destination = get_object_or_404(Destination, pk=pk)
        serializer = DestinationSerializer(destination)
        return Response(serializer.data)

class BookingCreate(APIView):
    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class BookingListView(APIView):
    def get(self, request):
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)