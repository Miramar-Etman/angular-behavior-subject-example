import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public data: BehaviorSubject<number> = 
    new BehaviorSubject(1);

  public updateData = (): void => {
    this.getAsync().subscribe(
      (res) => this.data.next(res),
    );
  }

  private getAsync = (): Observable<number> =>
    of(Math.floor(Math.random() * 1000));
}
