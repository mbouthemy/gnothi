import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/';
import { MatSnackBarModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ParticipantService } from './services/participant.service';
import { AssetsService } from './services/assets.service';
import { MessageService } from './services/message.service';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { SingleParticipantComponent } from './participant-list/single-participant/single-participant.component';
import { ParticipantFormComponent } from './participant-list/participant-form/participant-form.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { SingleAssetComponent } from './asset-list/single-asset/single-asset.component';
import { AssetFormComponent } from './asset-list/asset-form/asset-form.component';
import { TransactionComponent } from './user/transaction/transaction.component';
import { RequestComponent } from './user/request/request.component';
import { RequestService } from './services/request.service';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { LedgerComponent } from './ledger/ledger.component';
import { OperationsService } from './services/operations.service';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'participants', component: ParticipantListComponent },
  { path: 'participants/new', component: ParticipantFormComponent },
  { path: 'participants/view/:id', component: SingleParticipantComponent },
  { path: 'assets', component: AssetListComponent },
  { path: 'assets/new', component: AssetFormComponent },
  { path: 'assets/view/:id', component: SingleAssetComponent },
  { path: 'user/transaction', component: TransactionComponent },
  { path: 'user/request', component: RequestComponent },
  { path: 'admin/notifications', component: NotificationsComponent },
  { path: 'ledger', component: LedgerComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminComponent,
    UserComponent,
    ParticipantListComponent,
    SingleParticipantComponent,
    ParticipantFormComponent,
    HeaderComponent,
    SidenavComponent,
    AssetListComponent,
    SingleAssetComponent,
    AssetFormComponent,
    TransactionComponent,
    RequestComponent,
    NotificationsComponent,
    LedgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ParticipantService, AssetsService, MessageService, RequestService, OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
