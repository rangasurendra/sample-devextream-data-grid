import { NgModule, Component, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { DxDataGridModule } from "devextreme-angular";

import { Service, Respondent } from "./app.service";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent {
  employees: Respondent[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }
  // calculateCellValue(data) {
  //   return [data.responses.completed, data.responses.totalDistribution].join(
  //     " / "
  //   );
  // }
}

@NgModule({
  imports: [BrowserModule, DxDataGridModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
