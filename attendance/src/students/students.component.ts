import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students = [
    { id: 1, name: 'John Doe', age: 16, grade: '10th Grade' },
    { id: 2, name: 'Jane Smith', age: 15, grade: '9th Grade' },
    { id: 3, name: 'Michael Johnson', age: 17, grade: '11th Grade' },
    { id: 4, name: 'Emily Brown', age: 16, grade: '10th Grade' },
    { id: 5, name: 'Chris Williams', age: 14, grade: '8th Grade' },
  ];
}
