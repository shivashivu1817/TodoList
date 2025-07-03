import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';
import { AppService } from './app.service';
import { response } from 'express';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MenubarModule, ButtonModule, CardModule, TableModule, CheckboxModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

    @ViewChild('todoTask') todoTask: any;
    task = '';
    // todos: Todo[] = [];
    todos: Todo[] | any = null;

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        debugger
        this.getList();
    }

    getList() {
        this.appService.getTodoList().subscribe(
            response => {
                this.todos = response;
            }
        )
    }


    updateTodo(e: CheckboxChangeEvent, todo: Todo) {
        this.appService.updateTodo({ ...todo, completed: e.checked }).subscribe(
            response => console.log(response)
        )
    }

    deleteTodo(e: unknown, id: Todo['id']) {
        this.appService.deleteTodo(id).subscribe(
            response => this.getList()
        )
    }

    addTodo() {
        this.appService.addTodo({ task: this.task, completed: false }).subscribe(
            response => {
                this.todoTask.reset();
                this.getList();
            }
        )
    }



}



