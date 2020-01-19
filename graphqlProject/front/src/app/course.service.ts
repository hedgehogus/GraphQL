import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'apollo-angular';
import { map, filter } from 'rxjs/operators'
import {Query, Course} from './types';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
}
