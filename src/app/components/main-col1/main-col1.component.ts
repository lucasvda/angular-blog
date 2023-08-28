import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-col1',
  templateUrl: './main-col1.component.html',
  styleUrls: ['./main-col1.component.css', 'main-col1-responsive.component.css']
})
export class MainCol1Component {

@Input()
photoCover:string = ""
@Input()
altText:string = ""
@Input()
subject:string = ""
@Input()
title:string = ""
@Input()
description:string = ""
}


