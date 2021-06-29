import { SelectionReferenceNumber } from './SelectionReferenceNumber';
import { SelectionChanged } from './SelectionChanged';
import { GedcomTag } from '../tag';
import { SelectionAny } from './Selection';

export class SelectionRecord extends SelectionAny {
    
    getReferenceNumber() {
        return this.get(GedcomTag.Reference, null, SelectionReferenceNumber);
    }

    getRecordIdentificationNumber() {
        return this.get(GedcomTag.RecordIdNumber);
    }

    getChanged() {
        return this.get(GedcomTag.Change, null, SelectionChanged);
    }
}
