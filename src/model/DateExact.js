import { Node } from './Node';
import { Time } from './Time';
import { Tag } from '../tag';

export class DateExact extends Node {
    constructor(data, clazz) {
        super(data, clazz || DateExact);
    }

    getTime() {
        return this.get(Tag.TIME, Time);
    }
}
