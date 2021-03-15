import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/modules/i18n/translation.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { GeneralModule } from 'src/app/_metronic/partials/layout/general/general.module';
import { AuthGuard } from 'src/app/modules/auth/_services/auth.guard';
import { RoleGuardService as RoleGuard } from 'src/app/modules/auth/_services/role-guard.service';
import { ItemsComponent } from './items.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import {MatIconModule} from '@angular/material/icon';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [ItemsComponent, AddItemComponent, ItemsListComponent],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemsComponent,
        children: [
            {
                path: '',
                component: ItemsListComponent,
            },
            {
                path: 'add-item',
                component: AddItemComponent,
                // canActivate: [RoleGuard], 
                // data: { 
                //   expectedRole: 'Users.GetUsers'
                // }
            },
        ]
      },
    ]),

    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    GeneralModule,
    MatIconModule,

  ],
  exports: [RouterModule],
})
export class ItemssModule {}
