import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ParallaxComponent } from './parallax/parallax.component';
// import { BookingComponent } from './booking/booking.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
// import { ReceploginComponent } from './receptionist/receplogin/receplogin.component';
// import { AppointmentsComponent } from './receptionist/appointments/appointments.component';
// import { RecepregisterComponent } from './receptionist/recepregister/recepregister.component';
// import { PrevappoinComponent } from './receptionist/prevappoin/prevappoin.component'; 
import { DoctorComponent } from './doctor/doctor.component';
import { DocloginComponent } from './doctor/doclogin/doclogin.component';
import { DocregComponent } from './doctor/docreg/docreg.component';
import { DoctodayComponent } from './doctor/doctoday/doctoday.component';
import { DocpastComponent } from './doctor/docpast/docpast.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'parallax',
    pathMatch: 'full',
  },
  {
    path: 'parallax',
    component: ParallaxComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: 'doctor/login',
    component:DocloginComponent
  },
  {
    path: 'doctor/reg',
    component:DocregComponent
  },
  {
    path: 'doctor/current',
    component:DoctodayComponent
  },
  {
    path: 'doctor/past',
    component:DocpastComponent
  },


  // {
  //   path:'reception/login',
  //   component: ReceploginComponent
  // },
  // {
  //   path:'reception/appointments',
  //   component: AppointmentsComponent
  // },
  // {
  //   path:'reception/register',
  //   component: RecepregisterComponent
  // },
  // {
  //   path:'reception/history',
  //   component: PrevappoinComponent
  // },
  // {
  //   path: 'tablelist/booking',
  //   component: BookingComponent    
  // },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
            path: '',
            loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }
    ]
}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
