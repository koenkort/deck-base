import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { NbSidebarModule} from '@nebular/theme';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
      CommonModule,
      RouterModule,
      NbSidebarModule,
  ],
  exports: [SidebarComponent],
})

export class SidebarModule { }
