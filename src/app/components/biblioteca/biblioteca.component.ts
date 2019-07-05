import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
//para realizar el crud de registro con servidor
import { User } from '../../services/user';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { TdLoadingService, TdDialogService } from '@covalent/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/book';


@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  books: Book[];
  book: Book;

  hide = true;
  // validacion del email cuando aparece un error 
  email = new FormControl('', [Validators.required, Validators.email]);
  // loadingService: any;
  getErrorMessage() {
    return this.email.hasError('required') ? 'usted debe digitar un valor' :
      this.email.hasError('email') ? 'No es valido' : '';
  }

  constructor(private loadingService: TdLoadingService,
    private router: Router,
    private bookService: BookService,
    private dialogService: TdDialogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadingService.register('books');
    this.bookService.query<Array<Book>>({ sort: 'created', order: 'desc' })
      .subscribe(invoices => {
        this.books = invoices;
        this.loadingService.resolve('books');
      });
    this.loadingService.register('book');
    this.route.params.pipe(map((params: Params) => params.id)).subscribe(id => {
      if (id) {
        this.bookService.get<Book>(id).subscribe(customer => {
          this.book = customer;
          this.loadingService.resolve('book');
        });
      } else {
        this.book = new Book();
        this.loadingService.resolve('book');
      }
    });

  }

}
