import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, SharedModule, FormsModule],
  exports: [],
  entryComponents: [],
})
export class HomeModule {}
