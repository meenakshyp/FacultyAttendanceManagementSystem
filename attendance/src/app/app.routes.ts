import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { DemoComponent } from '../demo/demo.component';
import { StudentsComponent } from '../students/students.component';
import { AttendanceComponent } from '../attendance/attendance.component';
import { ReportsComponent } from '../reports/reports.component';
import { SettingsComponent } from '../settings/settings.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component:LoginComponent  },
  { path: 'dashboard', component:DemoComponent  },
  { path: 'students', component:StudentsComponent  },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },

  // Add other routes here as needed
];
