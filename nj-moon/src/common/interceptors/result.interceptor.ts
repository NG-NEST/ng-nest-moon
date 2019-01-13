import { Injectable, NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ResultList } from "common/interfaces/result.interface";

@Injectable()
export class ResultListInterceptor<T> implements NestInterceptor<T, ResultList<T>> {
  intercept(
    context: ExecutionContext,
    call: Observable<any>,
  ): Observable<any> {
    return call.pipe(map(x => {
      if (!x.list) {
        let param = context.getArgByIndex(0).params;
        let result: ResultList<T> = {
          list: x,
          query: {
            index: parseInt(param.index),
            size: parseInt(param.size)
          }
        }
        return result;
      };
      return x;
    }))

  }
}