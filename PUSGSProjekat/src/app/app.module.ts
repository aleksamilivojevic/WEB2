import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { IncidentBrowserComponent } from './incident-browser/incident-browser.component';
import { NotificationsComponent } from './notification/notifications.component';
import { NotificationsAllComponent } from './notification/notifications-all/notifications-all.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnregisteredGuard } from './guards/unregistered.guard';
import { WorkerGuard } from './guards/worker.guard';
import { AuthInterceptor } from './authInterceptor';
import { AddConsumerComponent } from './add-consumer/add-consumer.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AddNewDeviceComponent } from './add-new-device/add-new-device.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { SafetyDocumentsComponent } from './safety-documents/safety-documents.component';
import { SafetyDocumentsAddComponent } from './safety-documents-add/safety-documents-add.component';
import { SwitchingPlansComponent } from './switching-plans/switching-plans.component';
import { SwitchingPlansNewComponent } from './switching-plans-new/switching-plans-new.component';
import { SafetyDocumentsBasicInfoComponent } from './safety-documents-add/safety-documents-basic-info/safety-documents-basic-info.component';
import { SafetyDocumentsChecklistComponent } from './safety-documents-add/safety-documents-checklist/safety-documents-checklist.component';
import { SafetyDocumentsEquipmentComponent } from './safety-documents-add/safety-documents-equipment/safety-documents-equipment.component';
import { SafetyDocumentsHistoryComponent } from './safety-documents-add/safety-documents-history/safety-documents-history.component';
import { SafetyDocumentsMultimediaComponent } from './safety-documents-add/safety-documents-multimedia/safety-documents-multimedia.component';
import { IncidentBasicInfoComponent } from './incident-new/basic-information/incident-basic-info.component';
import { IncidentNewComponent } from './incident-new/incident-new.component';
import { IncidentCallsComponent } from './incident-new/incident-calls/incident-calls.component';
import { IncidentCrewComponent } from './incident-new/incident-crew/incident-crew.component';
import { IncidentDevicesComponent } from './incident-new/incident-devices/incident-devices.component';
import { IncidentEquipmentComponent } from './incident-new/incident-equipment/incident-equipment.component';
import { IncidentMultimediaComponent } from './incident-new/incident-multimedia/incident-multimedia.component';
import { IncidentResolutionComponent } from './incident-new/incident-resolution/incident-resolution.component';
import { SwitchingPlansBasicInfoComponent } from './switching-plans-new/switching-plans-basic-info/switching-plans-basic-info.component';
import { SwitchingPlansChecklistComponent } from './switching-plans-new/switching-plans-checklist/switching-plans-checklist.component';
import { SwitchingPlansEquipmentComponent } from './switching-plans-new/switching-plans-equipment/switching-plans-equipment.component';
import { SwitchingPlansHistoryComponent } from './switching-plans-new/switching-plans-history/switching-plans-history.component';
import { SwitchingPlansMultimediaComponent } from './switching-plans-new/switching-plans-multimedia/switching-plans-multimedia.component';
import { CallsComponent } from './calls/calls.component';
import { DeviceModalComponent } from './device-modal/device-modal.component';
import { MapComponent } from './map/map.component';
import { TeamsComponent } from './teams/teams.component';
import { WorkRequestsComponent } from './work-requests/work-requests.component';
import { WorkRequestsNewComponent } from './work-requests-new/work-requests-new.component';
import { WorkRequestsBasicInfoComponent } from './work-requests-new/work-requests-basic-info/work-requests-basic-info.component';
import { WorkRequestsEquipmentComponent } from './work-requests-new/work-requests-equipment/work-requests-equipment.component';
import { WorkRequestsHistoryComponent } from './work-requests-new/work-requests-history/work-requests-history.component';
import { WorkRequestsMultimediaComponent } from './work-requests-new/work-requests-multimedia/work-requests-multimedia.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    IncidentBrowserComponent,
    NotificationsComponent,
    NotificationsAllComponent,
    SidebarComponent,
    AddConsumerComponent,
    AddDeviceComponent,
    AddNewDeviceComponent,
    AddTeamComponent,
    SafetyDocumentsComponent,
    SafetyDocumentsAddComponent,
    SwitchingPlansComponent,
    SwitchingPlansNewComponent,
    SafetyDocumentsBasicInfoComponent,
    SafetyDocumentsChecklistComponent,
    SafetyDocumentsEquipmentComponent,
    SafetyDocumentsHistoryComponent,
    SafetyDocumentsMultimediaComponent,
    IncidentBasicInfoComponent,
    IncidentNewComponent,
    IncidentCallsComponent,
    IncidentCrewComponent,
    IncidentDevicesComponent,
    IncidentEquipmentComponent,
    IncidentMultimediaComponent,
    IncidentResolutionComponent,
    SwitchingPlansBasicInfoComponent,
    SwitchingPlansChecklistComponent,
    SwitchingPlansEquipmentComponent,
    SwitchingPlansHistoryComponent,
    SwitchingPlansMultimediaComponent,
    CallsComponent,
    DeviceModalComponent,
    MapComponent,
    AddTeamComponent,
    WorkRequestsComponent,
    WorkRequestsNewComponent,
    WorkRequestsBasicInfoComponent,
    WorkRequestsEquipmentComponent,
    WorkRequestsHistoryComponent,
    TeamsComponent,
    WorkRequestsMultimediaComponent,
    NavigationComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    ChartsModule,
    DragDropModule,
    ToastrModule.forRoot(),
  ],
  exports:[
    MatAutocompleteModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    ChartsModule,
    DragDropModule,
  ],
  providers: [
    UnregisteredGuard,
    WorkerGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  entryComponents: [DeviceModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
