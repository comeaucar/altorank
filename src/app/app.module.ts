import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TrendingComponent } from './trending/trending.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { RankingComponent } from './ranking/ranking.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { CreatedRankingsComponent } from './created-rankings/created-rankings.component';
import { CompletedRankingsComponent } from './completed-rankings/completed-rankings.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ResultsComponent } from './results/results.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    NavbarComponent,
    HomeComponent,
    TrendingComponent,
    RankingComponent,
    CreatedRankingsComponent,
    CompletedRankingsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    NgbModule,
    MatCardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatGridListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatToolbarModule,
    DragDropModule,
    AngularFirestoreModule,
    NgxChartsModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonToggleModule,
    Ng2SearchPipeModule
  ],
  providers: [{
    provide: FIREBASE_OPTIONS, useValue: environment.firebase
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
