import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2,4,6,8).subscribe(item => console.log(item))

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item... ${item}`),
      error: (err) => console.log(`error occured ${err}`),
      complete: () => console.log(`complete`)
    })

    from(['first', 'second', 'third']).subscribe({
      next: (order) => console.log(`${order} resulting item`),
      error: (err) => console.log(`error occured ${err}`),
      complete: () => console.log(`no more items`)
    })
  }
}
