import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs'
import { Product } from './product.model'

@Injectable({
  providedIn: 'root'
})
export class InmemorydataService implements InMemoryDbService {

  //Overriden method
  createDb (reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {

    let productlist: Product[] = [];
    /* [
      new Product(
        'Service Noise-Headphones',
        'Wireless',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdvD7jdPzOBshEwy_9rL-yZj-iQG6x-ULoQ&usqp=CAU',
        5,
        ['Amazing', 'Average', 'Perfect']
      ),
      new Product(
        'Service Boat-Headphones',
        'Wireless',
        'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627',
        5,
        ['Good', 'Worth for money']
      ),

      new Product(
        'Service JBL-Headphones',
        'Wireless',
        'https://5.imimg.com/data5/SELLER/Default/2021/12/LG/XI/LQ/40612680/61xxgppml8s-sl1500--250x250.jpg',
        3,
        ['Nice combo offer', 'Best in this range']
      ),

      new Product(
        'Service Sony-Headphones',
        'Wireless',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqGd0fkvTyYQzhYx8SgFhASlkzs44D0qjnA&usqp=CAU',
        6
      )
    ] */

    return { products: productlist } // api/products
  }

  // by default internally it gets above productlist as parameter
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(prod => prod.id)) + 1
                               : 1;
  }

  constructor () {}
}
