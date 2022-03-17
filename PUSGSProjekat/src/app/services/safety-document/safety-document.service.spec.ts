import { TestBed } from "@angular/core/testing";
import { SafetyDocument} from './safety-document.service';

describe('SafetyDocument', () => {
    let service: SafetyDocument;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SafetyDocument);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    })
})