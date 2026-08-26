import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "cadastro", 
        loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule) 
    }
];
