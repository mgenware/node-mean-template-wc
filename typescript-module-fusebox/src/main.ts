import LibA from 'dir/libA';
import LibB from './dir/libB';

export default class Main {
  static test() {
    LibA.test();
    LibB.test();
  }
}