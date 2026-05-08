from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .forms import StudentForm
from .models import Student

def home(request):
    form = StudentForm()

    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')

    students = Student.objects.all()

    return render(request, 'home.html', {
        'form': form,
        'students': students
    })