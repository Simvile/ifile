import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
pagerStart = 0;
selectedName?: string;
pageSize = 4;
@Input('data') pageableData: { name: string, value: number }[] = []
@Input() set initialSelection(initSelection: any) {
  if (initSelection) {
    this.select(initSelection.name);
  }
};

@Output('onSelect') nameSelected = new EventEmitter<string>();

public slideFiltersToRight(): void {
  if((this.pagerStart + 4) <= this.pageableData.length - 1){
    this.pagerStart += 4;
  }
}

public slideFiltersToLeft(): void {
  this.pagerStart = (this.pagerStart - 4) < 0 ? 0 : this.pagerStart - 4;
}

public select(name: string): void {
  this.selectedName = name;
  this.nameSelected.next(name);
}

public get pagedData() {
  const startIndex = this.pagerStart;
  const endIndex = startIndex + this.pageSize;
  return this.pageableData.slice(startIndex, endIndex);
}
}
