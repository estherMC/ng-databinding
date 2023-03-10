import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements  
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  
    @Input('srvElement') element: {type: string, name: string, content: string};
    @Input() name: string;
    @ViewChild('heading', {static:true}) header: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;

  
constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges){
     console.log('ngOnChanges called');
     console.log(changes);

   }

  ngOnInit() {
    console.log('ngOnInit called');   
    console.log('Text Content 1.: ' + this.header.nativeElement.textContent);
    console.log('Text Content 1.: ' + this.paragraph.nativeElement.textContent);
  
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
      console.log('ngAfterViewInit called');
      //Until here header has no value
      console.log('Text Content 2.: ' + this.header.nativeElement.textContent);
      console.log('Text Content 2.: ' + this.paragraph.nativeElement.textContent);      
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
