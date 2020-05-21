import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';

export const routes: Routes = [
    { path: '', redirectTo: '/color', pathMatch: 'full' },
    { path: 'color', component: ColorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
