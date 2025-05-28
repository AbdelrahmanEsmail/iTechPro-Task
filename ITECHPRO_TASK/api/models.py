from django.db import models

class Destination(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    ImageURL = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name

class Booking(models.Model):
    id = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=100)
    email = models.EmailField()
    destinationId = models.ForeignKey(Destination, on_delete=models.CASCADE)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking by {self.UserName} for {self.destinationId.name} on {self.date}"