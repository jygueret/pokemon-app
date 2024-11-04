import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBoderColor(this.initialColor);
  }

  initialColor = "#f5f5f5";
  defaultColor = "#009688";
  defaultHeight : number = 180;

  @Input("pkmBorderCard") borderColor!: String;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBoderColor(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBoderColor(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBoderColor(color: String) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
