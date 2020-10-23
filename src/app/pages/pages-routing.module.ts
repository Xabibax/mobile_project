import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "app",
    component: PagesComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
            import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "presenters",
        loadChildren: () =>
            import("./presenters/presenters.module").then((m) => m.PresentersModule),
      },
      {
        path: "sessions",
        loadChildren: () =>
            import("./sessions/sessions.module").then((m) => m.SessionsModule),
      },
      {
        path: "",
        redirectTo: "/app/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/app/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
