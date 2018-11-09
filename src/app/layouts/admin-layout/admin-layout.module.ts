import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { BookingComponent } from '../../booking/booking.component';
import { ChatbotComponent } from '../../chatbot/chatbot.component';
import { SportsComplexComponent } from '../../sports-complex/sports-complex.component';
import { GamesComponent } from '../../games/games.component';
import { TableTenisComponent } from '../../games/table-tenis/table-tenis.component';
import { BadmintonComponent } from '../../games/badminton/badminton.component';
import { VolleyComponent } from '../../games/volley/volley.component';
import { TennisComponent } from '../../games/tennis/tennis.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BookingComponent,
    ChatbotComponent,
    SportsComplexComponent,
    GamesComponent,
    TableTenisComponent,
    BadmintonComponent,
    VolleyComponent,
    TennisComponent
  ]
})

export class AdminLayoutModule {}
