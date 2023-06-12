import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedetailsComponent } from './components/pokedetails/pokedetails.component';
import { PoketableComponent } from './components/poketable/poketable.component';

const routes: Routes = [
  {path: 'home', component: PoketableComponent},
  {path: 'pokeDetail/:id', component: PokedetailsComponent},
  {path: ' ', pathMatch: 'full' , redirectTo: 'home'},
  {path: '**', pathMatch: 'full' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
