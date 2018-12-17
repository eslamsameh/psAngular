import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule, Routes } from '@angular/router';

import {GamePageComponent} from './gamePage/game-page';
import {GameService} from './services/gameService';

const routes: Routes = [
  { path: '', component: GamePageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GamePageComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule {}
