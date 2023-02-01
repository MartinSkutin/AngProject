import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Observable } from "rxjs-compat";

import { Ingredient } from "../shared/ingredient.model";
import * as shoppingListActions from "./store/shopping-list.actions";
import * as fromApp from "../store/app.reducer";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  animations: [
    trigger("ingList", [
      state(
        "in",
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateX(-100px)",
        }),
        animate(300),
      ]),
      transition("* => void", [
        animate(
          300,
          style({
            transform: "translateX(100px)",
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private ingChangedSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select("shoppingList");
    // this.ingredients = this.slService.getIngredients();
    // this.ingChangedSub = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }

  ngOnDestroy(): void {}
}
