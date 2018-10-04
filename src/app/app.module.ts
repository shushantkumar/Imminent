import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { BookingComponent } from './booking/booking.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

import { HistoryService } from './table-list/history.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DocloginComponent } from './doctor/doclogin/doclogin.component';
import { DocregComponent } from './doctor/docreg/docreg.component';
import { DoctodayComponent } from './doctor/doctoday/doctoday.component';
import { DocpastComponent } from './doctor/docpast/docpast.component';
// import { ReceptionistComponent } from './receptionist/receptionist.component';
// import { AppointmentsComponent } from './receptionist/appointments/appointments.component';
// import { PrevappoinComponent } from './receptionist/prevappoin/prevappoin.component';
// import { ReceploginComponent } from './receptionist/receplogin/receplogin.component';
// import { RecepregisterComponent } from './receptionist/recepregister/recepregister.component';
// import { HttpModule } from '@angular/http'; 
import { MatDialogModule } from '@angular/material/dialog';
import { ReportComponent } from './report/report.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RecepttodayComponent } from './receptionist/recepttoday/recepttoday.component';
import { ReceptpastComponent } from './receptionist/receptpast/receptpast.component';

//added import
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ParallaxComponent,
    LoginComponent,
    DoctorComponent,
    DocloginComponent,
    DocregComponent,
    DoctodayComponent,
    DocpastComponent,
    ReportComponent,
    ReceptionistComponent,
    RecepttodayComponent,
    ReceptpastComponent,
   
    // ReceptionistComponent,
    // AppointmentsComponent,
    // PrevappoinComponent,
    // ReceploginComponent,
    // RecepregisterComponent,
    // ChatbotComponent,
    // BookingComponent,

  ],
  entryComponents:[
    ReportComponent
  ],
  providers: [
    HistoryService,
    CookieService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
