"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InsuranceInfo {
    getInsuranceType() {
        return this._insuranceType;
    }
    setInsuranceType(value) {
        this._insuranceType = value;
    }
    getProvider() {
        return this._provider;
    }
    setProvider(value) {
        this._provider = value;
    }
    getPolicyNumber() {
        return this._policyNumber;
    }
    setPolicyNumber(value) {
        this._policyNumber = value;
    }
    getGroupNumber() {
        return this._groupNumber;
    }
    setGroupNumber(value) {
        this._groupNumber = value;
    }
    getPlanType() {
        return this._planType;
    }
    setPlanType(value) {
        this._planType = value;
    }
    getRelationship() {
        return this._relationship;
    }
    setRelationship(value) {
        this._relationship = value;
    }
    getEndDate() {
        return this._endDate;
    }
    setEndDate(value) {
        this._endDate = value;
    }
    getLastName() {
        return this._lastName;
    }
    setLastName(value) {
        this._lastName = value;
    }
    getFirstName() {
        return this._firstName;
    }
    setFirstName(value) {
        this._firstName = value;
    }
    getBirthdate() {
        return this._birthDate;
    }
    setBirthDate(value) {
        this._birthDate = value;
    }
    getStartDate() {
        return this._startDate;
    }
    setStartDate(value) {
        this._startDate = value;
    }
    getGender() {
        return this._gender;
    }
    setGender(value) {
        this._gender = value;
    }
}
exports.InsuranceInfo = InsuranceInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdXJhbmNlSW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vZGF0YS9pbmZvL0luc3VyYW5jZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxNQUFhLGFBQWE7SUFjZixnQkFBZ0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFDTSxnQkFBZ0IsQ0FBQyxLQUFvQjtRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRU0sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ00sV0FBVyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFDTSxlQUFlLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRU0sY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUNNLGNBQWMsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBd0I7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVNLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFDTSxlQUFlLENBQUMsS0FBZ0M7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNNLFVBQVUsQ0FBQyxLQUFXO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFTSxXQUFXO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBWTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ00sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBQ00sWUFBWSxDQUFDLEtBQVk7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUNNLFlBQVksQ0FBQyxLQUFXO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUUsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFDTSxZQUFZLENBQUMsS0FBVztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sU0FBUyxDQUFDLEtBQVk7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBN0ZELHNDQTZGQyJ9