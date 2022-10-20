import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule}  from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule }  from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_UI_COMPONENTS = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
  MatDialogModule,
];

@NgModule({
  imports: [  CommonModule, ...MATERIAL_UI_COMPONENTS ],
  exports: [ ...MATERIAL_UI_COMPONENTS ]
})
export class MaterialUiModule { }
