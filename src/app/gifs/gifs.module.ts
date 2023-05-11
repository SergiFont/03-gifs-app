import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    SearchBoxComponent,
    GifsListComponent
  ]
})
export class GifsModule { }
