import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './features/auth/auth.service';
import { ThemeService } from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'get-stream-io-draft';
  constructor(public auth: AuthService, private router: Router,
    themeService: ThemeService) {themeService.theme$.next('dark');}
  
  signOut() {
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(['signin'])
    });
  }
  
}

