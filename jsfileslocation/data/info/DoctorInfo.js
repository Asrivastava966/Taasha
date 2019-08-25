"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoctorInfo {
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstname) {
        this.firstName = firstname;
    }
    getMi() {
        return this.mi;
    }
    setMi(mi) {
        this.mi = mi;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastname) {
        this.lastName = lastname;
    }
    getNpiNumber() {
        return this.npiNumber;
    }
    setNpiNumber(npinumber) {
        this.npiNumber = npinumber;
    }
    getFacility() {
        return this.facility;
    }
    setFacility(value) {
        this.facility = value;
    }
    getMarketingRep() {
        return this.marketingRep;
    }
    setMarketing(value) {
        this.marketingRep = value;
    }
    getZipCode() {
        return this.zipCode;
    }
    setZipCode(value) {
        this.zipCode = value;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(value) {
        this.phone = value;
    }
    getSpecialty() {
        return this.specialty;
    }
    setSpecialty(taxonomy) {
        this.specialty = taxonomy;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getLegacyId() {
        return this.legacyId;
    }
    setLegacyId(legacyId) {
        this.legacyId = legacyId;
    }
    getAddress1() {
        return this.address1;
    }
    setAddress1(value) {
        this.address1 = value;
    }
    getAddress2() {
        return this.address2;
    }
    setAddress2(value) {
        this.address2 = value;
    }
    getCity() {
        return this.city;
    }
    setCity(value) {
        this.city = value;
    }
    getState() {
        return this.state;
    }
    setState(value) {
        this.state = value;
    }
    getExt() {
        return this.ext;
    }
    setExt(ext) {
        this.ext = ext;
    }
    getDeliveredBy() {
        return this.deliveredBy;
    }
    setDeliveredBy(deliveredBy) {
        this.deliveredBy = deliveredBy;
    }
}
exports.DoctorInfo = DoctorInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdG9ySW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vZGF0YS9pbmZvL0RvY3RvckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxNQUFhLFVBQVU7SUFvQlosUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBQ00sUUFBUSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUNNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUNNLFlBQVksQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtJQUM5QixDQUFDO0lBQ00sS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBQ00sS0FBSyxDQUFDLEVBQVU7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUNNLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUNNLFdBQVcsQ0FBQyxRQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUM1QixDQUFDO0lBQ00sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBQ00sWUFBWSxDQUFDLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO0lBQzlCLENBQUM7SUFDTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBQ00sZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDNUIsQ0FBQztJQUNNLFlBQVksQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFBO0lBQzdCLENBQUM7SUFDTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFDTSxVQUFVLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN4QixDQUFDO0lBQ00sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBQ00sUUFBUSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUNNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUNNLFlBQVksQ0FBQyxRQUFtQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtJQUM3QixDQUFDO0lBQ00sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBQ00sU0FBUyxDQUFDLE1BQWtCO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3hCLENBQUM7SUFDTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDTSxXQUFXLENBQUMsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUNNLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUNNLFdBQVcsQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFDTSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBQ00sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNwQixDQUFDO0lBQ00sT0FBTyxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUNNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUNNLFFBQVEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFDTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7SUFDTSxNQUFNLENBQUMsR0FBVztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNsQixDQUFDO0lBQ00sY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUNNLGNBQWMsQ0FBQyxXQUF3QjtRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNsQyxDQUFDO0NBQ0o7QUFoSUQsZ0NBZ0lDIn0=