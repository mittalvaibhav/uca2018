import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly title = 'app';
  public ob1 = {
     a: 3
  };
  public x: Array<any> = ['one', 'two', 'three'];

  public foo(x, y, z): void {
    alert("Submit button clicked");
  }

  public args = [0, 1, 2];

  public someFunction() {
    const args = [0, 1, 2, 4];
    args[2] = 10;
    console.log(undefined, ...args);
    this.ob1.a = 3;
    console.log(this.ob1.a)
  }

}
