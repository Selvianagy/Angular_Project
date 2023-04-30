import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  dropdown1Items = [
    {
      name: 'Item 1',
      subItems: ['Sub-Item 1.1', 'Sub-Item 1.2', 'Sub-Item 1.3']
    },
    {
      name: 'Item 2',
      subItems: ['Sub-Item 2.1', 'Sub-Item 2.2', 'Sub-Item 2.3']
    },
    {
      name: 'Item 3',
      subItems: ['Sub-Item 3.1', 'Sub-Item 3.2', 'Sub-Item 3.3']
    }
  ];
}
