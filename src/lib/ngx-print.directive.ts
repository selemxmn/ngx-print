import { Directive, HostListener, Input } from '@angular/core';
import { PrintBase } from './ngx-print.base';
import { IPrintOptions } from './iprint-options';
@Directive({
  selector: "button[ngxPrint]",
  standalone: true
})
export class NgxPrintDirective extends PrintBase {
  private printOptions: IPrintOptions = {
    printSectionId: null,
    printTitle: null,
    useExistingCss: false,
    bodyClass: '',
    previewOnly: false,
    closeWindow: true,
    printDelay: 0,
  };
  
  /**
   * Prevents the print dialog from opening on the window
   *
   * @memberof NgxPrintDirective
   */
  @Input() set previewOnly(value: boolean) {
    this.printOptions = {...this.printOptions, previewOnly: value};
  }

  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  @Input() set printSectionId(value: string) {
    this.printOptions = {...this.printOptions, printSectionId: value};
  }

  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  @Input() set printTitle(value: string) {
    this.printOptions = {...this.printOptions, printSectionId: value};
  }

  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  @Input() set useExistingCss(value: boolean) {
    this.printOptions = {...this.printOptions, useExistingCss: value};
  }

  /**
   * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
   *
   * @memberof NgxPrintDirective
   */
  @Input() set printDelay(value: number) {
    this.printOptions = {...this.printOptions, printDelay: value};
  }

  /**
   * Whether to close the window after print() returns.
   *
   */
  @Input() set closeWindow(value: boolean) {
    this.printOptions = {...this.printOptions, closeWindow: value};
  }

  /**
   * Class attribute to apply to the body element.
   *
   */
  @Input() set bodyClass(value: string) {
    this.printOptions = {...this.printOptions, bodyClass: value};
  }

  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  @Input()
  set printStyle(values: { [key: string]: { [key: string]: string } }) {
    this.setPrintStyle(values);
  }


  /**
   * @memberof NgxPrintDirective
   * @param cssList
   */
  @Input()
  set styleSheetFile(cssList: string) {
    super.setStyleSheetFile(cssList);
  }

  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  @HostListener('click')
  public print(): void {
    super.print(this.printOptions);
  }
}
