import { Component,OnInit  } from '@angular/core';
// import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample_project';
  name:string='';
  val:string='';
  newTodo: string = '';
  todos: string[] = [];
  editingIndex: number | null = null;  // Track the index of the item being edited
  editingValue: string = '';
  

  onclick() {
    console.log(this.name);
    this.val=this.name;
    this.name=''; 
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }
  deleteTodo(index: number) {
    console.log(index)
    this.todos.splice(index, 1);
  }
}



