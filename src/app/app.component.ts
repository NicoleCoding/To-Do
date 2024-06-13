import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './item/item.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ItemComponent],
})

export class AppComponent {
  componentTitle = 'To-do List';

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "Eat", done: true },
    { description: "Sleep", done: false },
    { description: "Play", done: false },
    { description: "Laugh", done: false },
  ];

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,

    });
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) => 
      this.filter === "done" ? item.done : !item.done
    );
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
