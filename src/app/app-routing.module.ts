import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: "1", component: BookComponent, data: { id: 1, title: "Per Anhalter durch die Galaxis", author: "Douglas Adams", year: 1979 } },
  { path: "2", component: BookComponent, data: { id: 2, title: "Norden und Süden", author: "Elizabeth Gaskell", year: 1854 } },
  { path: "3", component: BookComponent, data: { id: 3, title: "Eat That Frog!", author: "Brian Tracy", year: 2001 } },
  { path: "4", component: BookComponent, data: { id: 4, title: "Buddenbrooks", author: "Thomas Mann", year: 1901 } },
  { path: "5", component: BookComponent, data: { id: 5, title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
