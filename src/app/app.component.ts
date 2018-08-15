import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular - Href Vs RouterLink';

  preventDefault() {
    event.preventDefault();
  }

  onClick(event: Event) {
    // event.preventDefault();
  }
}
