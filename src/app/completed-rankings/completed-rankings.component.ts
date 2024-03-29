import { Component, OnInit } from '@angular/core';
import { Firestore, query, where, getDocs } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import {
  getDoc,
  doc,
  collection,
  getDocFromCache,
  addDoc,
  limit,
  FieldValue,
  updateDoc,
} from 'firebase/firestore';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-completed-rankings',
  templateUrl: './completed-rankings.component.html',
  styleUrls: ['./completed-rankings.component.css'],
})
export class CompletedRankingsComponent implements OnInit {
  completedRankings: any = [];
  currUser: any;
  fRankings: any = [];
  cols: number = 0;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public auth: Auth,
    public firestore: Firestore,
    public snackbar: MatSnackBar,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });
  }

  ngOnInit(): void {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.currUser = user;
      this.getCompleted();
    });
  }

  async getCompleted() {
    const rankingsRef = collection(this.firestore, 'completedRankings');
    const rankingQ = query(
      rankingsRef,
      where('userId', '==', this.currUser.uid)
    );

    const querySnapshot = await getDocs(rankingQ);
    querySnapshot.forEach((doc: any) => {
      const fDoc = {
        data: doc.data(),
        id: doc.id,
      };

      this.getFormattedRanking(fDoc.data.rankingId).then((res) => {
        if (res != null) {
          this.fRankings.push(res);
          this.completedRankings.push(fDoc);
        }
      });
    });
  }

  async getFormattedRanking(id: any) {
    const docRef = doc(this.firestore, 'rankings', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }

  navToRanking(id: any) {
    this.router.navigate(['results/' + id], {
      queryParams: { borda: 'original' },
    });
  }
}
