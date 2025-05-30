from django.urls import path
from .views import DestinationListView, DestinationDetailView, BookingListView, BookingCreate

urlpatterns = [
    path('destinations/', DestinationListView.as_view(), name='destination-list'),
    path('destinations/<int:pk>/', DestinationDetailView.as_view(), name='destination-detail'),
    path('bookings/', BookingListView.as_view(), name='booking-list'),
    path('bookings/create/', BookingCreate.as_view(), name='booking-create'),
]
