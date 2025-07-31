import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ IMPORT THIS

@Component({
  selector: 'app-root',
  standalone: true,              // ✅ Mark it as standalone
  imports: [CommonModule],       // ✅ Add CommonModule for ngFor & ngClass
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItems = ['Home', 'About', 'Services', 'Contact'];
  selectedItem = 'Home';

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
