import { BetterHighLightDirective } from './directives/better-highlight/better-highlight.directive';
import { BasicHighlightDirective } from './directives/basic-highlight-directive/basic-highlight.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuralDirectiveDirective } from './structural-directive.directive';
import { NgSwitchDirectiveComponent } from './directives/ng-switch-directive/ng-switch-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighLightDirective,
    StructuralDirectiveDirective,
    NgSwitchDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
