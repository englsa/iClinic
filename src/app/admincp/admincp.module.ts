import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincpComponent } from './admincp.component';
import { ProductComponent } from './product/product.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdmincpComponent, ProductComponent, SetupComponent]
})
export class AdmincpModule { }
