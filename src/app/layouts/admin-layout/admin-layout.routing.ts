import { Routes } from '@angular/router';

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

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'sports-complex', component: SportsComplexComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'booking',        component: BookingComponent},
    { path: 'chatbot',        component: ChatbotComponent},

    { path: 'Games',        component: GamesComponent},
    { path: 'TableTennis',        component: TableTenisComponent},
    { path: 'LongTennis',        component: TennisComponent},
    { path: 'VolleyBall',        component: VolleyComponent},
    { path: 'Badminton',        component: BadmintonComponent},


];
