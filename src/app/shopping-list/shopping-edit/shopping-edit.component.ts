import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { Ingredient } from "../../shared/ingredient.model";

import * as shoppingListActions from "../store/shopping-list.actions";
import * as fromApp from "../../store/app.reducer";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  addForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[1-9]+[0-9]*$"),
      ]),
    });
    this.subscription = this.store
      .select("shoppingList")
      .subscribe((stateData) => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          this.editedItemIndex = stateData.editedIngredientIndex;
          this.addForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        } else {
          this.editMode = false;
        }
      });
  }

  onAddItem() {
    const ingName = this.addForm.value["name"];
    const ingAmount = this.addForm.value["amount"];
    const newIngredient = new Ingredient(ingName, ingAmount);
    if (this.editMode) {
      this.store.dispatch(
        new shoppingListActions.UpdateIngredient({
          index: this.editedItemIndex,
          ingredient: newIngredient,
        })
      );
    } else {
      // this.slService.addIngredient(newIngredient);
      this.store.dispatch(new shoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    this.addForm.reset();
  }

  onClear() {
    // this.addForm.reset();
    this.editMode = false;
    this.store.dispatch(new shoppingListActions.StopEdit());
  }

  onDelete() {
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(
      new shoppingListActions.DeleteIngredient(this.editedItemIndex)
    );
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new shoppingListActions.StopEdit());
  }
}
