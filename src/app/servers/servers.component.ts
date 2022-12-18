import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <section>
      <h1>I'm in the Servers Component</h1>
      <p>Below this I have 2 server components</p>
      <app-server></app-server>
      <app-server></app-server>
  </section>
  `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
