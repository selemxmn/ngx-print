import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrintService } from './ngx-print.service';
import { Component } from '@angular/core';
import { PrintOptions } from './print-options';
@Component({
  template: `
  <div id="print-section">
    <h1>
      Welcome to ngx-print
    </h1>
    <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    <h2>Here are some links to help you start: </h2>
    <ul >
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    <table border="1">
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </table>
  </div>
  `
})
class TestNgxPrintServiceComponent {
  constructor(private printService: NgxPrintService) { }

  printMe(printOptions: PrintOptions) {
    this.printService.print(printOptions);
  }
}

describe('NgxPrintService', () => {
  let service: NgxPrintService;
  let component: TestNgxPrintServiceComponent;
  let fixture: ComponentFixture<TestNgxPrintServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestNgxPrintServiceComponent],
      providers: [NgxPrintService]
    });
    service = TestBed.inject(NgxPrintService);
    // Create a fixture object (that is going to allows us to create an instance of that component)
    fixture = TestBed.createComponent(TestNgxPrintServiceComponent);

    // Create a component instance ( ~ new Component)
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should print with custom options', () => {
    spyOn(service, 'print');

    const customPrintOptions: PrintOptions = new PrintOptions({
      printSectionId: 'print-section'
    });

    component.printMe(customPrintOptions);

    expect(service.print).toHaveBeenCalledWith(customPrintOptions);
  });
});
