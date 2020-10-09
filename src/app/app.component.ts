import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { UtilsService } from "./shared-module/Services/utils/utils.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Chargebizz-Adminpanel";
  loading: Boolean = false;
  constructor(private router: Router, private utils: UtilsService) {}
  ngOnInit() {
    setInterval(() => {
      if (localStorage.getItem("loader")) this.loading = true;
      else this.loading = false;
    }, 50);
  }
}
