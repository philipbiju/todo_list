import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  taskstring: string = "";
  arr: any[] = [];
  // editing:boolean = false;
  //status:string ="";
  button = "Edit";
  index!: number;
  checked = false;
  isEdit: boolean = false
  save() {
    if (this.taskstring) {
      console.log(this.taskstring);
      this.arr.push({ taskname: this.taskstring, iscompleted: false, iseditable: false })
      //HomeComponent.h_array = this.arr;
      console.log(this.arr);
      //this.status = "In progress";

      this.taskstring = "";

    }
    else {
      console.log('taskstring is empty or undifines');
    }
  }
  editTask(index: number, inputref: HTMLInputElement) {
    //this.arr[index].iseditable = true;

    this.isEdit = true
    this.arr[index].iseditable = true;
    this.arr[index].taskname = inputref.value;
    this.taskstring = this.arr[index].taskname;
    inputref.value=''
    this.index = index
  }
  anotherEdit() {
    this.arr[this.index].taskname = this.taskstring
    this.isEdit = false
    this.arr[this.index].iseditable = false;
    
    this.index = 1
    this.taskstring = ''
  }
  deleteTask(index: number) {
    if (confirm("do you want to delete this task")) {
      this.arr.splice(index, 1);
    }


  }
  updateEdit(index: number) {
    this.arr[index].iseditable = false;

  }
  ischecked(index: number) {
    this.arr[index].iscompleted = !this.arr[index].iscompleted;
    console.log(this.arr);


  }

}
